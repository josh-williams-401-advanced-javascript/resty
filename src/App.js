import React from 'react';
import axios from 'axios';
import md5 from 'md5';

import './style/base.scss';
import './style/header.scss';
import './style/form.scss';
import './style/results.scss';
import './style/footer.scss';

import Header from './components/header';
import Form from './components/form';
import Footer from './components/footer';
import Results from './components/results';
import History from './components/history';

class App extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      requestData:null,
      resultsIn: null,
      loading: false,
      pastSearches: JSON.parse(localStorage.getItem('pastSearches')),
    };
  }

  talkToApi = async (requestObj) => {
    this.toggleLoading()
    try {
      let results = await axios(requestObj);
      this.getResults(results);
      this.saveToLocalStorage(requestObj)
    } catch(e) {
      console.log(e)
      this.toggleLoading();
    }
  }

  toggleLoading = () => this.setState({loading: !this.state.loading});

  getResults = (requestData) => {
    console.log('in get results')
    this.toggleLoading();
    this.setState({ requestData, resultsIn:'results' })
  }

  saveToLocalStorage = async (requestObj) => {
    const hash = md5(JSON.stringify(requestObj))

    await this.setState({pastSearches: { ...this.state.pastSearches, [hash]: requestObj }});
    
    console.log(this.state.pastSearches);

    let stringifiedObj = JSON.stringify(this.state.pastSearches);

    localStorage.setItem('pastSearches', stringifiedObj);
  }

  render = () => (
    <div className="App">
      <Header />
      <main>
        <Form handleInput={this.talkToApi}  />
        <History pastSearches={this.state.pastSearches} talkToApi={this.talkToApi}/>
        <Results data={this.state.requestData} resultsIn={this.state.resultsIn} loading={this.state.loading}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
