import React from 'react';
import { Route } from 'react-router-dom';

export default () => (
  <Route exact path="/help">
    <h2>Help</h2>
    <p>Make API on the "Home" page by entering a url, selecting the method, and entering a request body if needed. Click on buttons for previous requests to make the API call again. See your complete history on the "History" page, you can click on the url to see details about your previous API calls and you can re-run the calls from this page as well.</p>
  </Route>
);
