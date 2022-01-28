import { useState, useEffect } from 'react';

const getWindowWidth = () => window.innerWidth;

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

export default useWindowWidth;

// thanks to https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
