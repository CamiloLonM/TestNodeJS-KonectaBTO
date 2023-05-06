import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const onClickEmployees = () => {
    navigate('/employees');
  };

  const onClickRequests = () => {
    navigate('/requests');
  };
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <button
        className='bg-gray-300 p-5 text-2xl rounded-lg mb-3'
        onClick={onClickEmployees}
      >
        Employees
      </button>

      <button
        className='bg-gray-300 p-5 text-2xl rounded-lg mt-3'
        onClick={onClickRequests}
      >
        Requests
      </button>
    </div>
  );
};

export default Home;
