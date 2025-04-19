import { ScheduleTypeEnum } from 'src/queries';
import * as Yup from 'yup';

export const getInitialValues = (isHalfDay: boolean, startTime: string, endTime: string) => {
  return {
    isHalfDay,
    startTime,
    endTime,
    numberOfWeeks: 1,
    repeatFor: ['WAO'],
  };
};

export const validationRepeatScheduleSchema = Yup.object().shape({
  repeatFor: Yup.array()
    .of(Yup.mixed<ScheduleTypeEnum>().oneOf([ScheduleTypeEnum.WFH, ScheduleTypeEnum.WAO]))
    .min(1, 'Select at least one')
    .required(),

  numberOfWeeks: Yup.number()
    .typeError('Please enter a number between 1 and 7')
    .required('Number of weeks is required')
    .min(1, 'Minimum is 1 week')
    .max(7, 'Maximum is 7 weeks'),
});
