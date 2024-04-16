import React from 'react';
import { useUser } from './Usercontext'; 

import Navigation from './Navigation';
import '../assets/App.css';

const Header = () => {
  const userContext = useUser(); 
  const user = userContext ? userContext.user : null;

  return (
    <div className='header'>
      
      
      <Navigation userRole={user ? user.role : 'guest'} />
      
    </div>
  );
};

export default Header;
