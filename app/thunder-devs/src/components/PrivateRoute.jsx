import React from 'react'; 
import { useAuth0 } from '@auth0/auth0-react'; 


const PrivateRoute = ({ children }) => {

    const { isAuthenticated } = useAuth0();
    if ( isAuthenticated ) {
        return children;
    }
    return <div className='text-9xl text-red-500 '>No estás autorizado para ver este sitio.</div>;
  };
  
  export default PrivateRoute;
  