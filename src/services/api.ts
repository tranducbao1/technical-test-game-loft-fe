import appConfig from '@config';
import apisauce from 'apisauce';

export const api = apisauce.create({
  baseURL: appConfig.API_URL,
  headers: {
    Accept: 'application/json',
  },
  timeout: 30000,
  withCredentials: true,
});
