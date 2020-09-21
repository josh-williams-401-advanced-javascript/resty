import React from 'react';
import { Route } from 'react-router-dom';
// import Editor from 'react-simple-code-editor';
// import Prism from 'prismjs';
// import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import '../style/form.scss'
import '../style/base.scss'

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      method: this.props.defaultMethod,
      url: this.props.defaultUrl,
      data: this.props.defaultData,
    }

  }

  setMethod = async e => {
    await this.setState({ method: e.target.value });
    console.log(this.state.method)
    this.props.updateRadio('method', this.state.method);
  }
  setUrl = async e => {
    await this.setState({ url: e.target.value });
    this.props.updateRadio('url', this.state.url)
  }
  setData = async e =>{
    await this.setState({ data: e.target.value });
    this.props.updateRadio('data', this.state.data)
    console.log('data in form', this.state.data)
  }
  sendInput = async (e) => {
    // e.preventDefault()
    await this.props.handleInput();
  }

  render = () => {
    // this.setState({ method: this.props.defaultMethod });
    return (
      <>
        <Route exact path="/" >

          <h2>API Request</h2>
          <section className="form">

            <fieldset>
              <legend>URL</legend>
              <input data-testid="urlInput" placeholder="http://" value={this.props.defaultUrl} onChange={this.setUrl} />
            </fieldset>

            <fieldset>
              <legend>Body</legend>
              <textarea value={this.props.defaultData} onChange={this.setData} ></textarea>
              {/* <Editor
                value={this.props.defaultData || ''}
                // defaultValue={this.props.defaultData}
                onValueChange={e => this.setData(e)}
                // highlight={() => {}}
                highlight={code => highlight(code, languages.js)}
                padding={5}
                style={{
                  // fontFamily: '"Fira code", "Fira Mono", monospace',
                  // fontSize: 12,
                  // border: "1px solid grey",
                  // height: '88%',
                  // color: 'red',
                }}
                tabSize={2}
                textareaId={"code-area"}
              /> */}
            </fieldset>

            <fieldset>
              <legend>Method</legend>
              <div>

                <input type="radio" /*aria-checked="true"*/ value="GET" name="method" onChange={this.setMethod}
                  checked={this.props.defaultMethod === "GET"} />
                <label htmlFor="GET">GET</label>


                <input data-testid="methodInput" /*aria-checked="true"*/ type="radio" value="POST" name="method" onChange={this.setMethod} checked={this.props.defaultMethod === "POST"} />

                <label htmlFor="POST">POST</label>

                <input type="radio" value="PUT" name="method" onChange={this.setMethod} checked={this.props.defaultMethod === 'PUT'} />
                <label htmlFor="PUT">PUT</label>

                <input type="radio" value="DELETE" name="method" onChange={this.setMethod} checked={this.props.defaultMethod === 'DELETE'} />
                <label htmlFor="DELETE">DELETE</label>

              </div>
            </fieldset>

            <button data-testid="submit" onClick={this.sendInput}>Go</button>

          </section>
        </Route>
      </>
    )
  }
}
;


export default Form;
