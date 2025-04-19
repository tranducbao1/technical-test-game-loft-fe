import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'react-bootstrap';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { GoHome } from 'react-icons/go';
import { PiLaptopThin } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
import {
  RepeatSchedulePayload,
  ScheduleTypeEnum,
  useGetSchedules,
  useRepeatSchedule,
} from 'src/queries/schedule';
import { hideDialog } from 'src/redux/dialog/dialogSlice';
import { Toastify } from 'src/services';
import { isEmpty } from 'src/utils';
import { getInitialValues, validationRepeatScheduleSchema } from './helpers';

const RepeatModel: React.FC<Props> = ({ isHalfDay, startTime, endTime }) => {
  const dispatch = useDispatch();

  const { handleInvalidateGetSchedules } = useGetSchedules();

  const { onRepeatSchedule, isRepeating } = useRepeatSchedule({
    onSuccess: () => {
      Toastify.success('Schedule have been repeated successfully!');
      handleInvalidateGetSchedules();
      dispatch(hideDialog());
    },
    onError: (error) => {
      Toastify.error(error?.message);
    },
  });

  const formMethods = useForm<RepeatSchedulePayload>({
    mode: 'onChange',
    shouldFocusError: true,
    reValidateMode: 'onChange',
    defaultValues: getInitialValues(isHalfDay, startTime, endTime),
    resolver: yupResolver<any>(validationRepeatScheduleSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;
  const handleRepeat = (data: RepeatSchedulePayload) => {
    const payload = {
      ...data,
      part: isHalfDay ? 'HAFT' : 'FULL',
    };

    onRepeatSchedule(payload);
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit((data) => handleRepeat(data))}>
        <div className="mb-3">
          <div className="fw-bold">Repeat option:</div>
          <div className="mt-1 form-check d-flex align-items-center gap-2">
            <input className="form-check-input" type="radio" id="repeat-for" checked readOnly />
            <label htmlFor="repeat-for" className="form-check-label me-2">
              Repeat for
            </label>
            <Controller
              name="numberOfWeeks"
              control={control}
              render={({ field: { onChange, ...field } }) => (
                <input
                  type="number"
                  min={1}
                  max={7}
                  {...field}
                  className="form-control d-inline-block"
                  style={{ width: 80 }}
                  onChange={(e) => {
                    if (isEmpty(e.target.value)) onChange(null);

                    return onChange(parseInt(e.target.value));
                  }}
                />
              )}
            />
            <span className="ms-2">(max 7)</span>
          </div>
          {errors.numberOfWeeks && (
            <div className="text-danger mt-1" style={{ fontSize: '13px' }}>
              {errors.numberOfWeeks.message}
            </div>
          )}
        </div>
        <div className="mb-4">
          <div className="fw-bold">Repeat for:</div>
          <Controller
            name="repeatFor"
            control={control}
            render={({ field }) => (
              <div className="d-flex mt-1 d-flex justify-content-center gap-4">
                {[ScheduleTypeEnum.WAO, ScheduleTypeEnum.WFH].map((type) => {
                  const isChecked = field.value.includes(type);
                  return (
                    <div key={type}>
                      <div className="">
                        <input
                          type="checkbox"
                          id={`repeat-${type}`}
                          checked={isChecked}
                          onChange={() => {
                            const newVal = isChecked
                              ? field.value.filter((v) => v !== type)
                              : [...field.value, type];
                            field.onChange(newVal);
                          }}
                          className="form-check-input d-none"
                        />
                        <label
                          htmlFor={`repeat-${type}`}
                          className={`form-check-label position-relative border rounded p-2 text-center ${
                            isChecked ? 'border-warning bg-light' : 'border-secondary'
                          }`}
                          style={{
                            cursor: 'pointer',
                            display: 'block',
                            width: '150px',
                            height: '150px',
                          }}
                        >
                          <input
                            type="checkbox"
                            id={`repeat-${type}`}
                            checked={isChecked}
                            onChange={() => {
                              const newVal = isChecked
                                ? field.value.filter((v) => v !== type)
                                : [...field.value, type];
                              field.onChange(newVal);
                            }}
                            className="position-absolute"
                            style={{
                              top: '8px',
                              left: '8px',
                              width: '16px',
                              height: '16px',
                              cursor: 'pointer',
                            }}
                          />
                          <div className="mb-2" style={{ fontSize: '40px' }}>
                            {type === ScheduleTypeEnum.WAO ? <PiLaptopThin /> : <GoHome />}
                          </div>
                          <div className="fw-semibold">
                            {type === ScheduleTypeEnum.WAO ? 'Work at office' : 'Work from home'}
                          </div>
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          />
          {errors.repeatFor && (
            <div className="text-danger mt-2 text-center" style={{ fontSize: '13px' }}>
              {errors.repeatFor.message}
            </div>
          )}
        </div>

        <div className="d-flex justify-content-end gap-2">
          <Button
            variant="outline-secondary"
            disabled={isRepeating}
            onClick={() => dispatch(hideDialog())}
          >
            Cancel
          </Button>
          <Button variant="warning" type="submit" disabled={isRepeating}>
            Save
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

type Props = {
  isHalfDay?: boolean;
  startTime?: string;
  endTime?: string;
};

export default RepeatModel;
