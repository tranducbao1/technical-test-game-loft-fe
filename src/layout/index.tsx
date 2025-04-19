import { Outlet } from 'react-router-dom';
import DialogContainer from './DialogContainer';
import ToastContainer from './ToastContainer';

const CommonLayout = () => {
  return (
    <>
      <Outlet />
      <ToastContainer />
      <DialogContainer />
    </>
  );
};

export default CommonLayout;
