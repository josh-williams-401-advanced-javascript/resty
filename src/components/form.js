import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
      urlPlaceholder: '',
      methodPlaceholder: ''
    }
  }

  setMethod = e => this.setState({ methodPlaceholder: e.target.value })
  setUrl = e => this.setState({ urlPlaceholder: e.target.value });

  showUrlAndMethod = e => {
    e.preventDefault();
    this.setState({ url: this.state.urlPlaceholder })
    this.setState({ method: this.state.methodPlaceholder })
  };

  render() {
    return (
      <div >
        <section className="form">
        <fieldset>
          <legend>URL</legend>
          <input placeholder="http://" onChange={this.setUrl} />
        </fieldset>
        <fieldset>
          <legend>Method</legend>
          <input type="radio" value="GET" name="method" onChange={this.setMethod} />
          <label htmlFor="GET">GET</label>
          <input type="radio" value="POST" name="method" onChange={this.setMethod} />
          <label htmlFor="POST">POST</label>
          <input type="radio" value="PUT" name="method" onChange={this.setMethod} />
          <label htmlFor="PUT">PUT</label>
          <input type="radio" value="DELETE" name="method" onChange={this.setMethod} />
          <label htmlFor="DELETE">DELETE</label>
        </fieldset>
        <button onClick={this.showUrlAndMethod}>Go</button>
        </section>

        <div>
          <span>{this.state.method}</span>
          <span>{this.state.url}</span>
        </div>

      </div>
    );
  }
}

export default Form;