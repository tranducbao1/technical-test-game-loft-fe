import CommonLayout from '@layout';
import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const SchedulePageContainer = React.lazy(() => import('./Schedule'));

const Container = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
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
