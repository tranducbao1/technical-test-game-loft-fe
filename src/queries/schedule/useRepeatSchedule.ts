import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { responseWrapper } from '../helpers';
import { repeatSchedule } from './apis';
import { RepeatSchedulePayload } from './types';

export function useRepeatSchedule(options?: UseMutationOptions<any, Error, RepeatSchedulePayload>) {
  const {
    mutate: onRepeatSchedule,
    isPending: isRepeating,
    isSuccess,
    isError,
    error,
  } = useMutation<any, Error, RepeatSchedulePayload>({
    mutationFn: (payload: RepeatSchedulePayload) => responseWrapper(repeatSchedule, [payload]),
    ...options,
  });

  return {
    onRepeatSchedule,
    isRepeating,
    isSuccess,
    isError,
    error,
  };
}
