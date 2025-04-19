import { Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { Container } from 'react-bootstrap';
import { Control, useFieldArray } from 'react-hook-form';
import { UpdateSchedulesPayload } from 'src/queries/schedule';
import Item from '../Item';

const FullDay: React.FC<Props> = ({ control }) => {
  const today = dayjs().format('YYYY-MM-DD');

  const { fields } = useFieldArray({
    control: control,
    name: 'data',
  });

  return (
    <Container className="mt-5">
      <Grid container spacing={2}>
        {fields?.map((schedule, index) => {
          const scheduleDate = schedule?.calendarDate?.date;
          const isToday = dayjs(scheduleDate).format('YYYY-MM-DD') === today;

          return (
            <Grid size={2.4} key={schedule?.id}>
              <Typography className={`text-center mb-4 fw-bold ${isToday ? 'text-warning' : ''}`}>
                {`${schedule?.calendarDate?.weekday.slice(0, 3)} ${schedule?.calendarDate?.day}`}
              </Typography>

              <Item schedule={schedule} index={index} control={control} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

type Props = {
  control?: Control<UpdateSchedulesPayload>;
};

export default FullDay;
