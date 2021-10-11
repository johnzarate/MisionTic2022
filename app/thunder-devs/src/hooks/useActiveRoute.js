import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
//custom hook
const useActiveRoute = (route) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    //here search if the location includes some part of route
    //without count / and whitespaces, hence it's functional
    if (location.pathname.includes(route.split("/")[1])) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location, route]);

  return isActive;
};

export default useActiveRoute;
