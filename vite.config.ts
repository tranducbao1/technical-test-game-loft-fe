import reactPlugin from '@vitejs/plugin-react';
import { resolve } from 'path';
import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

export default defineConfig((env: ConfigEnv) => ({
  plugins: [
    reactPlugin(),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      '@bootstrap': pathResolve('node_modules/bootstrap'),
      '@core': pathResolve('src/modules/shared'),
      '@queries': pathResolve('src/queries'),
      '@redux': pathResolve('src/redux'),
      '@config': pathResolve('src/config'),
      '@layout': pathResolve('src/layout'),
      '@containers': pathResolve('src/containers'),
      '@providers': pathResolve('src/providers'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components'),
      '@modules': pathResolve('src/modules'),
      src: pathResolve('src'),
    },
  },
  base: '/',
  server: {
    host: loadEnv(env.mode, process.cwd()).VITE_HOST,
    port: parseInt(loadEnv(env.mode, process.cwd()).VITE_PORT, 10),
  },
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
    commonjsOptions: {
      include: [/node_modules/],
      extensions: ['.js', '.cjs'],
      strictRequires: true,
      transformMixedEsModules: true,
    },
  },
}));
