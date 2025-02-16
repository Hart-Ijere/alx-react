//import logo from './logo.svg';
//import holbertonLogo, favicon from '\0x01-react_intro\task_0\dashboard\src';
//import favicon //from '\0x01-react_intro\task_0\dashboard\src';
import React from 'react';
import './App.css';
import holbertonLogo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils'; // import functions
import createNotifications from './Notifications';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      {/*<createNotification />*/}
      <div className="App-header">
        <p>{createNotifications()}</p>
        <img src={holbertonLogo} alt="Holberton logo" />
        <h1>School dashboard</h1>

      </div>
      
      {/* Body Section */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      
      {/* Footer Section */}
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
