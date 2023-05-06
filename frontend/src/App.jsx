import { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

const HomeComponent = lazy(() => import('./components/Home'));
const EmployeesComponent = lazy(() => import('./components/Employees/Grid'));
const EmployeesFormComponent = lazy(() =>
  import('./components/Employees/Form')
);
const RequestsComponent = lazy(() => import('./components/Requests/Grid'));
const RequestsFormComponent = lazy(() => import('./components/Requests/Form'));
const RequestsDeleteComponent = lazy(() =>
  import('./components/Requests/Delete')
);

function App() {
  return (
    <div className=' w-full h-screen m-0 p-0'>
      <Suspense fallback={<div>Loading ...</div>}>
        <HashRouter>
          <Routes>
            <Route path='' element={<HomeComponent />} />
            <Route path='/employees' element={<EmployeesComponent />} />
            <Route
              path='/employees/create'
              element={<EmployeesFormComponent />}
            />
            <Route path='/requests' element={<RequestsComponent />} />
            <Route
              path='/requests/create'
              element={<RequestsFormComponent />}
            />
            <Route
              path='/requests/delete/:id'
              element={<RequestsDeleteComponent />}
            />
          </Routes>
        </HashRouter>
      </Suspense>
    </div>
  );
}

export default App;
