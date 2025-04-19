import { Control } from 'react-hook-form';
import { ScheduleResponseType, UpdateSchedulesPayload } from 'src/queries/schedule';
import FullDay from './FullDay';
import HalfDay from './HalfDay';

const ScheduleTable: React.FC<Props> = ({ schedules, isHalfDay, control }) => {
  return isHalfDay ? (
    <HalfDay schedules={schedules} control={control} />
  ) : (
    <FullDay control={control} />
  );
};

type Props = {
  schedules?: ScheduleResponseType[];
  isHalfDay?: boolean;
  control?: Control<UpdateSchedulesPayload>;
};

export default ScheduleTable;
