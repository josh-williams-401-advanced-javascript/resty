import React from 'react';


class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
      data:'',
    }
  }

  setMethod = e => this.setState({ method: e.target.value })
  setUrl = e => this.setState({ url: e.target.value });
  setData = e => this.setState({ data: e.target.value});

  sendInput = () => this.props.handleInput(this.state);

  render = () => (
    <>
      <section className="form">

        <fieldset>
          <legend>URL</legend>
          <input data-testid="urlInput" placeholder="http://" onChange={this.setUrl} />
        </fieldset>

        <fieldset>
          <legend>Method</legend>
          <div>
            <input type="radio" value="GET" name="method" onChange={this.setMethod} />
            <label htmlFor="GET">GET</label>
            <input data-testid="methodInput" type="radio" value="POST" name="method" onChange={this.setMethod} />
            <label htmlFor="POST">POST</label>
            <input type="radio" value="PUT" name="method" onChange={this.setMethod} />
            <label htmlFor="PUT">PUT</label>
            <input type="radio" value="DELETE" name="method" onChange={this.setMethod} />
            <label htmlFor="DELETE">DELETE</label>
          </div>
        </fieldset>

        <button data-testid="submit" onClick={this.sendInput}>Go</button>



      </section>
      <fieldset>
        <legend>Body</legend>
        <textarea onChange={this.setData}></textarea>
      </fieldset>
    </>
  );
}

export default Form;