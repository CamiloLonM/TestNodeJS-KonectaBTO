import { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

const HomeComponent = lazy(() => import('./components/Home'));
const EmployeesComponent = lazy(() => import('./components/Employees/Grid'));
const RequestsComponent = lazy(() => import('./components/Requests/Grid'));

function App() {
  return (
    <div className=' w-full h-screen m-0 p-0'>
      <Suspense fallback={<div>Loading ...</div>}>
        <HashRouter>
          <Routes>
            <Route path='' element={<HomeComponent />} />
            <Route path='/employees' element={<EmployeesComponent />} />
            <Route path='/requests' element={<RequestsComponent />} />
          </Routes>
        </HashRouter>
      </Suspense>
    </div>
  );
}

export default App;
