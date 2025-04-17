/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly NODE_ENV: string;
  readonly VITE_HOST: string;
  readonly VITE_PORT: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
