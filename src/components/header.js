import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <header className="App-header">
      <h1>RESTy</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
