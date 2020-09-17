import React from 'react';
import JSONPrettify from 'react-json-prettify';
import theme from 'react-json-prettify/dist/themes/xcode'

import loadingImage from '../img/three-blue-dots.gif';

const customTheme = {
  ...theme,
  overflow: 'scroll',
}

class Results extends React.Component {

  render = () => {
    if (this.props.resultsIn === 'error') {
      return <h1>Bad Request</h1>
    
    } else if (this.props.resultsIn !== null) {

      return (
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
      )

    } else {
      return this.props.loading ? (
        <section id="logo">
          < img src={loadingImage} alt="loading" />
        </section>
      ) : null;

    }
  }
}

export default Results;