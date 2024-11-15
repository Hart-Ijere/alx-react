//import logo from './logo.svg';
//import holbertonLogo, favicon from '\0x01-react_intro\task_0\dashboard\src';
//import favicon //from '\0x01-react_intro\task_0\dashboard\src';
import React from 'react';
import './App.css';
import holbertonLogo from './holberton-logo.jpg';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <div className="App-header">
        <img src={holbertonLogo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </div>
      
      {/* Body Section */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      
      {/* Footer Section */}
      <div className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </div>
    </div>
  );
}

export default App;
