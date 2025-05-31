import { useEffect } from 'react';

const useScrollTop = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default useScrollTop;
