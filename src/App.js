import Register from './Register';
import Login from './Login';
import Logo from './Logo';
import'./App.css';

import React, { useState } from 'react';

function App() {
  
  const [currentForm,setCurrentform]=useState('Login');
  const toggleForm=(formName)=>{
    setCurrentform (formName);
  }  
return (
   
    <div className="App">
      <Logo/>
      
  {
   currentForm ==="Login" ?  < Login onFormSwitch={toggleForm} /> :  <Register onFormSwitch={toggleForm} /> 
  }
     
  </div>
 
  );  
  
}

export default App;
