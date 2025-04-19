import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainAppNavigator from './containers';
import { QueryProvider, ReduxProvider } from './providers';
import './styles.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider>
      <QueryProvider>
        <BrowserRouter>
          <MainAppNavigator />
        </BrowserRouter>
      </QueryProvider>
    </ReduxProvider>
  </StrictMode>,
);
