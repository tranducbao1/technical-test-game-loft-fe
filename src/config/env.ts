export const envConfigs = {
  API_URL: import.meta.env.VITE_API_URL,
  NODE_ENV: import.meta.env.MODE,
  APP_ENV: import.meta.env.VITE_BUILD_MODE,
  APP_VERSION: import.meta.env.VITE_VERSION || '0.1.0',
};
