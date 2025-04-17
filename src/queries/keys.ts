import { UseQueryOptions } from '@tanstack/react-query';

export enum API_QUERIES {
  SCHEDULE_LIST = '/schedule-list',
}

export type QueryOptions<T> = Omit<UseQueryOptions, 'QueryKey'> & { QueryKey: T };
