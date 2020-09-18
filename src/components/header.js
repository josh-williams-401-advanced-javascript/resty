import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <header className="App-header">
      <h1>RESTy</h1>
      <nav>
        <ul>
          <li>
            <NavLink data-testid="homelink" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink data-testid="historylink" to="/history">History</NavLink>
          </li>
          <li>
            <NavLink data-testid="helplink" to="/help">Help</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
