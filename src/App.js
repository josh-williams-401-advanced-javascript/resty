import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import md5 from 'md5';

import './style/reset.scss'
import './style/base.scss';
import './style/header.scss';
import './style/form.scss';
import './style/results.scss';
import './style/footer.scss';
import './style/nav.scss';

import Header from './components/header';
import Form from './components/form';
import Footer from './components/footer';
import Results from './components/results';
import History from './components/history';
import Help from './components/help';

class App extends React.Component { 

  constructor (props) {
    super(props);
    this.state = {
      requestData:null,
      resultsIn: null,
      loading: false,
      pastSearches: JSON.parse(localStorage.getItem('pastSearches')),
      method:'GET',
      data: '',
    };
  }

  talkToApi = async (requestObj = {method: this.state.method, url: this.state.url, data: this.state.data}) => {

    this.toggleLoading()
    await this.setState({ url: requestObj.url, data: requestObj.data});
    console.log('state.data in App.js',this.state.data);
    await this.setState({ method: requestObj.method})
    console.log('method in App.js', this.state.method);

    try {
      let results = await axios(requestObj);
      this.getResults(results);
      this.saveToLocalStorage(requestObj)
    } catch(e) {
      console.log(e)
      this.toggleLoading();
      this.setState({resultsIn:'error', requestData:'Bad Request'});
    }
  }

  toggleLoading = () => this.setState({loading: !this.state.loading});

  updateRadio = async (apiPart, value) => {
    await this.setState({[apiPart]: value});
    console.log('App data', this.state.data);
    console.log('app url', this.state.url)
  }

  getResults = async (requestData) => {
    this.toggleLoading();
    await this.setState({ requestData, resultsIn:'results' })
  }

  saveToLocalStorage = async (requestObj) => {
    const hash = md5(JSON.stringify(requestObj))

    await this.setState({pastSearches: { ...this.state.pastSearches, [hash]: requestObj }});

    let stringifiedObj = JSON.stringify(this.state.pastSearches);

    localStorage.setItem('pastSearches', stringifiedObj);
  }

  render = () => (
    <BrowserRouter className="App">
      <Header />
      <main>
        <Help />
        <Form handleInput={this.talkToApi} defaultUrl={this.state.url} defaultMethod={this.state.method} defaultData={this.state.data}  updateRadio={this.updateRadio}/>
        {/* <h1>method {this.state.method}</h1> */}
        <History pastSearches={this.state.pastSearches} talkToApi={this.talkToApi}/>
        <Results data={this.state.requestData} resultsIn={this.state.resultsIn} loading={this.state.loading} />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
