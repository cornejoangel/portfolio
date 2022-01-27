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

// export default function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   );

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return windowDimensions;
// }
