import { useState, useEffect } from 'react';

const MobileOnlyPopup = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check the screen size on load
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsLargeScreen(true);
        // Add the class to disable scrolling
        document.body.classList.add('overflow-hidden');
      } else {
        setIsLargeScreen(false);
        // Remove the class if it's no longer a large screen
        document.body.classList.remove('overflow-hidden');
      }
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
      // Remove the class when the component unmounts
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  if (!isLargeScreen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg text-center max-w-[500px] mx-auto">
        <p className="text-gray-700 mb-4 f-arya-regular">
          This website is designed for mobile screens only. Please switch to a mobile device for the best experience.
        </p>
      </div>
    </div>
  );
};

export default MobileOnlyPopup;
