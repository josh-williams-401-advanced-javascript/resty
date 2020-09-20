import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class Histroy extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      hash:'',
    }
  }
  makeRequest = (request) => {
    this.props.talkToApi(request);
    this.setState({showDetails: false});
  }
  showRequestDetails = (hash) => {
    this.setState({
      showDetails: true,
      hash:hash,
    });
  }
  
  render = () => {
    if (this.props.pastSearches) {
      return (
        <Switch>
          <Route exact path="/">
            <aside>
              <h2>Previous Searches</h2>
              <ul>
                {
                  Object.keys(this.props.pastSearches).map(hash =>
                    <li key={hash}>
                      <span className={this.props.pastSearches[hash].method}>{this.props.pastSearches[hash].method}</span>
                      <button onClick={() => this.makeRequest(this.props.pastSearches[hash])}>{this.props.pastSearches[hash].url}</button>
                    </li>
                  )}
              </ul>
            </aside >
          </Route>
          <Route exact path="/history">
            <h2>History</h2>
            <aside>
              <ul>
                {
                  Object.keys(this.props.pastSearches).map(hash =>
                    <li key={hash}>
                      <span className={this.props.pastSearches[hash].method}>{this.props.pastSearches[hash].method}</span>
                      <span onClick={() => this.showRequestDetails(hash)}>{this.props.pastSearches[hash].url}</span>
                    </li>
                  )}
              </ul>
            </aside >
                  {  (this.state.showDetails) ?
                  <div>

                    <p>{this.props.pastSearches[this.state.hash].method}</p>
                    <p>{this.props.pastSearches[this.state.hash].url}</p>
                    <p>{this.props.pastSearches[this.state.hash].data}</p>

                    <Link to="/" onClick={() => this.makeRequest(this.props.pastSearches[this.state.hash])}>
                      Re-Run
                    </Link>

                  </div>
                  
                  : null }
          </Route>
        </Switch>
      );
    } else { return (
      <Route path="/history">
        <h2>History</h2>
      </Route>
    )}
  }
}
export default Histroy;