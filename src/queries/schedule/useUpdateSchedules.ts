import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { responseWrapper } from '../helpers';
import { updateSchedules } from './apis';
import { UpdateSchedulesPayload } from './types';
export function useUpdateSchedules(
  options?: UseMutationOptions<any, Error, UpdateSchedulesPayload>,
) {
  const {
    mutate: onUpdateSchedules,
    isPending: isUpdating,
    isSuccess,
    isError,
    error,
  } = useMutation<any, Error, UpdateSchedulesPayload>({
    mutationFn: (payload: UpdateSchedulesPayload) => responseWrapper(updateSchedules, [payload]),
    ...options,
  });

  return {
    onUpdateSchedules,
    isUpdating,
    isSuccess,
    isError,
    error,
  };
}
