import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

const tableStyles = 'border border-4 border-stone-900';
const thStyles = 'border p-3 bg-gray-500 border-stone-900';
const tdStyles = 'border p-1 bg-gray-200 border-stone-900 text-center';

const GridEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/employees');
      setEmployees([...data]);
    }
    fetchData();
  }, []);

  if (employees.length > 0) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <table className={tableStyles}>
          <caption className='caption-top pb-4 text-3xl'>Employees</caption>
          <caption className='caption-bottom pt-4'>
            <div className='flex justify-around'>
              <button
                onClick={() => navigate('/')}
                className='text-sm bg-blue-500 hover:bg-blue-700 p-3 rounded-md font-bold text-white w-full'
              >
                Back
              </button>
              <button
                onClick={() => navigate('/employees/create')}
                className='text-sm bg-green-500 hover:bg-green-700 p-3 rounded-md font-bold text-white w-full'
              >
                New Employee
              </button>
            </div>
          </caption>
          <thead>
            <tr>
              <th className={thStyles}>#</th>
              <th className={thStyles}>admission_date</th>
              <th className={thStyles}>salary</th>
              <th className={thStyles}>name</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td className={tdStyles}>{index + 1}</td>
                <td className={tdStyles}>{employee.admission_date}</td>
                <td className={tdStyles}>{employee.salary}</td>
                <td className={tdStyles}>{employee.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default GridEmployees;
