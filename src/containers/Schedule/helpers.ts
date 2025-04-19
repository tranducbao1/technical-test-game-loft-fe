import { ScheduleResponseType } from 'src/queries';

export const getInitialValues = (schedules: ScheduleResponseType[]) => {
  return {
    data: schedules.map((schedule) => ({ ...schedule })),
  };
};
