import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // có thể dùng 'auto' nếu không muốn hiệu ứng
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
