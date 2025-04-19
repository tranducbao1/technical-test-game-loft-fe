import { GetPropertiesParams } from 'src/queries';
import { api } from 'src/services';
import { newCancelToken, stringify } from 'src/utils';
import { RepeatSchedulePayload, UpdateSchedulesPayload } from './types';

const getSchedules = (params: GetPropertiesParams) => {
  return api.get(`/schedules?${stringify(params)}`, {}, newCancelToken());
};

const updateSchedules = (data: UpdateSchedulesPayload) => {
  return api.put(`/schedules/update-schedules`, data, newCancelToken());
};

const repeatSchedule = (data: RepeatSchedulePayload) => {
  return api.put(`/schedules/repeat`, data, newCancelToken());
};

export { getSchedules, repeatSchedule, updateSchedules };
