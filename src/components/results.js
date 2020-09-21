import React from 'react';
import JSONPrettify from 'react-json-prettify';
import theme from 'react-json-prettify/dist/themes/xcode'
import { Route } from 'react-router-dom';

import loadingImage from '../img/three-blue-dots.gif';

const customTheme = {
  ...theme,
  overflow: 'scroll',
}

class Results extends React.Component {

  render = () => {
    return (
      <Route exact path="/">
        {
          (this.props.resultsIn === 'error') ? <h2 id="results">Bad Request</h2>
            : (this.props.resultsIn !== null) ?
              (
                <>
                  <div id={this.props.resultsIn}>
                    <h2>Headers</h2>
                    <JSONPrettify json={this.props.data.headers} theme={customTheme} padding={6} />
                  </div>
                  <div id={this.props.resultsIn}>
                    <h2>Results</h2>
                    <JSONPrettify json={this.props.data.data} theme={customTheme} padding={6} />
                  </div>
                </>
              ) : (
                this.props.loading ?
                  <section id="logo">
                    < img src={loadingImage} alt="loading" />
                  </section>
                  : null
              )
        }
      </Route>
    )
  }
}

export default Results;
