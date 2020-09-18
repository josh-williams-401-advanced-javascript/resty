import React from 'react';
import { Route } from 'react-router-dom';


class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      method: this.props.defaultMethod,
      url: this.props.defaultUrl,
      data:this.props.defaultData,
    }

  }

  setMethod = e => this.setState({ method: e.target.value });
  setUrl = e => this.setState({ url: e.target.value });
  setData = e => this.setState({ data: e.target.value});

  sendInput = () => this.props.handleInput(this.state);

  render = () => (
    <Route exact path="/">
    <>
      <section className="form">

        <fieldset>
          <legend>URL</legend>
          <input data-testid="urlInput" placeholder="http://" defaultValue={this.props.defaultUrl} onChange={this.setUrl} />
        </fieldset>

        <fieldset>
          <legend>Method</legend>
          <div>
            <input type="radio" aria-checked="true" value="GET" name="method" onChange={this.setMethod}
              defaultChecked={ this.state.method === "GET" ? true : false } />
            <label  htmlFor="GET">GET</label>


            <input data-testid="methodInput" type="radio" value="POST" name="method" onChange={this.setMethod} checked={this.state.method === "POST" ? true : false} />

            <label htmlFor="POST">POST</label>

            <input type="radio" value="PUT" name="method" onChange={this.setMethod} checked={this.state.method === 'PUT' ? true : false} />
            <label htmlFor="PUT">PUT</label>

            <input type="radio" value="DELETE" name="method" onChange={this.setMethod} checked={this.state.method === 'DELETE' ? true : false}/>
            <label htmlFor="DELETE">DELETE</label>

          </div>
        </fieldset>

        <button data-testid="submit" onClick={this.sendInput}>Go</button>

      </section>
      <fieldset>
        <legend>Body</legend>
        <textarea onChange={this.setData} defaultValue={this.props.defaultData}></textarea>
      </fieldset>
    </>
    </Route>
  );
}

export default Form;
