import { Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Control, useFieldArray } from 'react-hook-form';
import { PiSun, PiSunHorizon } from 'react-icons/pi';
import {
  SchedulePartEnum,
  ScheduleResponseType,
  UpdateSchedulesPayload,
} from 'src/queries/schedule';
import Item from '../Item';

const HalfDay: React.FC<Props> = ({ schedules, control }) => {
  const { fields } = useFieldArray({
    control: control,
    name: 'data',
  });

  const scheduleAMs = useMemo(
    () => fields?.filter((schedule) => schedule?.part === SchedulePartEnum.AM),
    [fields],
  );

  const schedulePMs = useMemo(
    () => fields?.filter((schedule) => schedule?.part === SchedulePartEnum.PM),
    [fields],
  );

  const today = dayjs().format('YYYY-MM-DD');

  return (
    <Container className="mt-5">
      <Grid container spacing={2}>
        <Grid size={1} className="d-flex align-items-center justify-content-center">
          <Button
            variant="light"
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              height: '45px',
              width: '45px',
            }}
          >
            <PiSun style={{ width: '40px', height: '40px', color: '#FFB300' }} />
          </Button>
        </Grid>
        {scheduleAMs.map((scheduleAM) => {
          const index = fields.findIndex((f) => f.id === scheduleAM.id);
          const scheduleDate = scheduleAM?.calendarDate?.date;
          const isToday = dayjs(scheduleDate).format('YYYY-MM-DD') === today;

          return (
            <Grid key={scheduleAM?.id} size={2.2}>
              <Typography className={`text-center mb-4 fw-bold ${isToday ? 'text-warning' : ''}`}>
                {`${scheduleAM?.calendarDate?.weekday.slice(0, 3)} ${scheduleAM?.calendarDate?.day}`}
              </Typography>
              <Item schedule={scheduleAM} index={index} control={control} />
            </Grid>
          );
        })}
      </Grid>
      <Grid container spacing={2} className="mt-3">
        <Grid size={1} className="d-flex align-items-center justify-content-center">
          <Button
            variant="light"
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              height: '45px',
              width: '45px',
            }}
          >
            <PiSunHorizon style={{ width: '40px', height: '40px', color: '#4C8BF5' }} />
          </Button>
        </Grid>
        {schedulePMs.map((schedulePM) => {
          const index = fields.findIndex((f) => f.id === schedulePM.id);

          return (
            <Grid key={schedulePM?.id} size={2.2}>
              <Item schedule={schedulePM} index={index} control={control} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

type Props = { schedules?: ScheduleResponseType[]; control?: Control<UpdateSchedulesPayload> };

export default HalfDay;
