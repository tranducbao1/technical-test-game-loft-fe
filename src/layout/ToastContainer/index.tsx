import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default () => (
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    theme="light"
    pauseOnHover
  />
);
