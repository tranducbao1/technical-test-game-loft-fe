import { GetPropertiesParams } from 'src/queries';
import { api } from 'src/services';
import { newCancelToken, stringify } from 'src/utils';

const getSchedules = (params: GetPropertiesParams) => {
  return api.get(`/schedules?${stringify(params)}`, {}, newCancelToken());
};

export { getSchedules };
