import { FC, ReactNode } from 'react';
import { ToastOptions, toast } from 'react-toastify';

const error = (message: string, options?: ToastOptions) => {
  toast.error(<Message msg={message} />, options);
};

const success = (message: string, options?: ToastOptions) => {
  toast.success(<Message msg={message} />, options);
};

const warning = (message: string, options?: ToastOptions) => {
  toast.warning(<Message msg={message} />, options);
};
const info = (message: string, options?: ToastOptions) => {
  toast.info(<Message msg={message} />, { ...options });
};

const Message: FC<{ msg: string | ReactNode }> = ({ msg }) => {
  return <span>{msg}</span>;
};

export default {
  error,
  success,
  warning,
  info,
};
