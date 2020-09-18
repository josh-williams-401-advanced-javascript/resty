import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import md5 from 'md5';

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
    };
  }

  talkToApi = async (requestObj) => {

    this.toggleLoading()
    this.setState({ url: requestObj.url, data: requestObj.data});
    this.setState({ method: requestObj.method})

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

  getResults = (requestData) => {
    this.toggleLoading();
    this.setState({ requestData, resultsIn:'results' })
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
        <Form handleInput={this.talkToApi} defaultUrl={this.state.url} defaultMethod={this.state.method} defaultData={this.state.data}  />
        <History pastSearches={this.state.pastSearches} talkToApi={this.talkToApi}/>
        <Results data={this.state.requestData} resultsIn={this.state.resultsIn} loading={this.state.loading} />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
