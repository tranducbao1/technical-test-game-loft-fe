import CommonLayout from '@layout';
import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoadingContainer from 'src/modules/components/LoadingContainer';

const SchedulePageContainer = React.lazy(() => import('./Schedule'));

const Container = () => {
  return (
    <Suspense fallback={<LoadingContainer />}>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/schedule" element={<SchedulePageContainer />} />
          <Route path="*" element={<Navigate to="/schedule" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Container;
