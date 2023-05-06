import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

const tableStyles = 'border border-4 border-stone-900';
const thStyles = 'border p-3 bg-gray-500 border-stone-900';
const tdStyles = 'border p-1 bg-gray-200 border-stone-900 text-center';

const GridRequests = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/requests');
      setRequests([...data]);
    }
    fetchData();
  }, []);

  if (requests.length > 0) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <table className={tableStyles}>
          <caption className='caption-top pb-4 text-3xl'>Requests</caption>
          <caption className='caption-bottom pt-4'>
            <div className='flex justify-around'>
              <button
                onClick={() => navigate('/')}
                className='text-sm bg-blue-500 hover:bg-blue-700 p-3 rounded-md font-bold text-white w-full'
              >
                Back
              </button>
              <button
                onClick={() => navigate('/requests/create')}
                className='text-sm bg-green-500 hover:bg-green-700 p-3 rounded-md font-bold text-white w-full'
              >
                New Request
              </button>
            </div>
          </caption>
          <thead>
            <tr>
              <th className={thStyles}>#</th>
              <th className={thStyles}>Code</th>
              <th className={thStyles}>Description</th>
              <th className={thStyles}>Summary</th>
              <th className={thStyles}>Employee Name</th>
              <th className={thStyles}></th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index}>
                <td className={tdStyles}>{index + 1}</td>
                <td className={tdStyles}>{request.code}</td>
                <td className={tdStyles}>{request.description}</td>
                <td className={tdStyles}>{request.summary}</td>
                <td className={tdStyles}>{request.employee_name}</td>
                <td className={tdStyles}>
                  <button
                    className='p-1 bg-red-500 text-white text-xs'
                    onClick={() => navigate(`/requests/delete/${request.id}`)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default GridRequests;
