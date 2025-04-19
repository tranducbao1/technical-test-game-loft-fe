import { useQuery, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { useState } from 'react';
import { GetPropertiesParams } from 'src/queries';
import { responseWrapper } from 'src/queries/helpers';
import { ApiResponseType } from 'src/services';
import { isEmpty } from 'src/utils';
import { getSchedules } from '.';
import { API_QUERIES } from '../keys';
import { ScheduleResponseType } from './types';

export function useGetSchedules(
  options?: UseQueryOptions<ApiResponseType<ScheduleResponseType[]>>,
) {
  const [params, setParams] = useState<GetPropertiesParams>({});

  const {
    data,
    error,
    isError,
    isFetching,
    refetch: onGetSchedules,
  } = useQuery({
    queryKey: [API_QUERIES.SCHEDULE_LIST, params],
    queryFn: async (query) => {
      const [_, ...params] = query.queryKey;
      return responseWrapper<ApiResponseType<ScheduleResponseType[]>>(getSchedules, params);
    },
    placeholderData: (previousData) => previousData,
    notifyOnChangeProps: ['data', 'isFetching'],
    enabled: !isEmpty(params),
    ...options,
  });

  const queryClient = useQueryClient();

  const handleInvalidateGetSchedules = () =>
    queryClient.invalidateQueries({
      queryKey: [API_QUERIES.SCHEDULE_LIST, params],
    });
  const { data: schedules = [], meta: { count: rowCount = 0 } = {} } = data || {};

  return {
    rowCount,
    schedules,
    error,
    isError,
    isFetching,
    setParams,
    onGetSchedules,
    handleInvalidateGetSchedules,
  };
}
