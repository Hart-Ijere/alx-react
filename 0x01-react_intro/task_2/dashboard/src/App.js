//import logo from './logo.svg';
//import holbertonLogo, favicon from '\0x01-react_intro\task_0\dashboard\src';
//import favicon //from '\0x01-react_intro\task_0\dashboard\src';
import React from 'react';
import './App.css';
import holbertonLogo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils'; // import functions
import createNotifications from './Notifications.js';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      {/*<createNotification />*/}
      <div className="App-header">
        <p>{createNotifications()}</p>
        <createNotifications />
        <img src={holbertonLogo} alt="Holberton logo" />
        <h1>School dashboard</h1>

      </div>
      
      {/* Body Section */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type='email' id='email' name='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' />
        <button type='button'>OK</button>
      </div>
      
      {/* Footer Section */}
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
