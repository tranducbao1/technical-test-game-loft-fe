import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';
import { Accordion, Button, Card, Container } from 'react-bootstrap';
import { Form, FormProvider, useForm } from 'react-hook-form';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import LoadingContainer from 'src/modules/components/LoadingContainer';
import {
  UpdateSchedulePayload,
  UpdateSchedulesPayload,
  useGetSchedules,
  useUpdateSchedules,
} from 'src/queries';
import { Toastify } from 'src/services';
import RepeatSchedule from './RepeatSchedule';
import ScheduleTable from './ScheduleTable';
import './styles.scss';
import WeekSelector from './WeekSelector';
import { getCurrentWeekRange } from './WeekSelector/helpers';

const SchedulePageContainer = () => {
  const [isHalfDay, setIsHalfDay] = useState(false);
  const [open, setOpen] = useState(true);
  const { startTime, endTime } = getCurrentWeekRange();
  const [startTimeDate, setStartTimeDate] = useState(startTime);
  const [endTimeDate, setEndTimeDate] = useState(endTime);
  const { schedules, setParams, isFetching, handleInvalidateGetSchedules } = useGetSchedules();

  const { onUpdateSchedules, isUpdating } = useUpdateSchedules({
    onSuccess: () => {
      Toastify.success('Schedule have been updated successfully!');
      handleInvalidateGetSchedules();
    },
    onError: (error) => {
      Toastify.error(error?.message);
    },
  });

  useEffect(() => {
    setParams({
      startTime: startTimeDate,
      endTime: endTimeDate,
      part: isHalfDay ? 'HALF' : 'FULL',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTimeDate, endTimeDate, isHalfDay]);

  const handleClickNext = useCallback(() => {
    const nextStart = dayjs(startTimeDate).add(1, 'week');
    const nextEnd = nextStart.add(4, 'day');
    setStartTimeDate(nextStart.format('YYYY-MM-DD'));
    setEndTimeDate(nextEnd.format('YYYY-MM-DD'));
  }, [startTimeDate]);

  const handleClickPrevious = useCallback(() => {
    const prevStart = dayjs(startTimeDate).subtract(1, 'week');
    const prevEnd = prevStart.add(4, 'day');
    setStartTimeDate(prevStart.format('YYYY-MM-DD'));
    setEndTimeDate(prevEnd.format('YYYY-MM-DD'));
  }, [startTimeDate]);

  const formMethods = useForm<UpdateSchedulesPayload>({
    mode: 'onChange',
    shouldFocusError: true,
    reValidateMode: 'onChange',
    defaultValues: { data: [] },
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = formMethods;

  const handleReset = () => reset();

  const handleUpdate = handleSubmit((data: UpdateSchedulesPayload) => {
    const payload: UpdateSchedulesPayload = {
      data: data.data.map((item) => ({
        id: item.id,
        type: item.type,
      })),
    };
    onUpdateSchedules(payload);
  });

  useEffect(() => {
    if (schedules?.length) {
      const formatted: UpdateSchedulePayload[] = schedules.map((s) => ({
        id: s.id,
        type: s.type,
        calendarDate: s.calendarDate,
        part: s.part,
      }));

      reset({ data: formatted });
    }
  }, [reset, schedules]);

  return (
    <FormProvider {...formMethods}>
      <Form>
        <Container className="mt-5">
          <Card className="shadow rounded-2">
            <Card.Header className="d-flex justify-content-between align-items-center bg-white border-0 px-4 pt-4">
              <div className="d-flex align-items-center ">
                <h4 className="mb-0 fw-bold">My Schedule</h4>
                <Button
                  variant="outline-secondary"
                  className="ms-3 p-1 d-flex align-items-center justify-content-center"
                  onClick={() => setOpen(!open)}
                  style={{ height: '32px', width: '32px' }}
                >
                  {!open ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </Button>
              </div>
              <div className="btn-group shadow">
                <Button variant="warning" className="text-dark fw-bold">
                  Week
                </Button>
                <Button variant="light" className="text-dark fw-bold">
                  Month
                </Button>
              </div>
            </Card.Header>
            <Accordion activeKey={open ? '0' : null} className="mb-4">
              <Accordion.Collapse eventKey="0">
                <Card.Body className="m-4 schedule-card-body p-4 rounded-4">
                  <WeekSelector
                    isHalfDay={isHalfDay}
                    setIsHalfDay={setIsHalfDay}
                    startTime={startTimeDate}
                    endTime={endTimeDate}
                    handleClickPrevious={handleClickPrevious}
                    handleClickNext={handleClickNext}
                  />
                  {!isFetching ? (
                    <>
                      <ScheduleTable
                        isHalfDay={isHalfDay}
                        schedules={schedules}
                        control={control}
                      />
                      <RepeatSchedule
                        isHalfDay={isHalfDay}
                        startTime={startTimeDate}
                        endTime={endTimeDate}
                        isDirty={isDirty}
                        isUpdating={isUpdating}
                        handleReset={handleReset}
                        handleUpdate={handleUpdate}
                      />
                    </>
                  ) : (
                    <LoadingContainer />
                  )}
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </Card>
        </Container>
      </Form>
    </FormProvider>
  );
};

export default SchedulePageContainer;
