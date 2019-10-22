import React, { useEffect } from 'react';
import Routes from './componets/Routes'
import { toggleIcon } from './componets/Navbar/ToggleNav';

function App(){

  useEffect(() => {
    toggleIcon();
  });

  return(
      <Routes />
  );
}


export default App;