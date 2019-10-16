import React, { Component } from 'react';
import Routes from './componets/Routes'
import { toggleIcon } from './componets/Navbar/ToggleNav';


class App extends Component{

  componentDidMount() {
    toggleIcon();
  }
  render(){
    return(
      <Routes />
    );
  }
}


export default App;