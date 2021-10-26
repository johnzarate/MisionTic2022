import React from 'react';
import image from 'media/logo.png';
import { useAuth0 } from '@auth0/auth0-react';

const Logo = () => {
  const {user, isAuthenticated} = useAuth0();
  return (
      <>
        <img className='mx-auto h-40 w-auto mt-8 mb-4' src={isAuthenticated ? user.picture: image} alt='App Icon' />
        <hr className="bg-black block w-full h-0.5 mb-8 opacity-75"/>
      </>
  )
};

export default Logo;
