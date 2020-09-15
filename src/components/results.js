import React from 'react';
import JSONPrettify from 'react-json-prettify';
import theme from 'react-json-prettify/dist/themes/xcode'

const customTheme = {
  ...theme,
  overflow: 'scroll',
}

class Results extends React.Component {

  render = () => {
    if (this.props.resultsIn !== null) {
      return (
        <div id={this.props.resultsIn}>
          <h2>Results</h2>
          <JSONPrettify json={this.props.data} theme={customTheme} padding={6} />
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Results;