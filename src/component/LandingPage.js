import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the name parameter from the URL query string
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name') || 'Tamu';

  const handleClick = () => {
    navigate(`/main?name=${name}`); // Include the name parameter in the URL
  };

  return (
    <div className='flex items-center justify-center flex-col h-screen bg-[#EEE9E1] px-4'>
      <h1 className='text-center text-[#34352F] f-montserrat-medium text-lg'>
        Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i {name},
        untuk menghadiri acara pernikahan kami:
      </h1>
      <button
        onClick={handleClick}
        className='mt-10 bg-[#C0C6B8] h-12 w-64 rounded-lg flex items-center justify-center text-[#34352F] f-montserrat-medium text-base'
      >
        Buka Undangan
      </button>
    </div>
  );
}

export default LandingPage;
