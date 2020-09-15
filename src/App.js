import React from 'react';

import './style/base.scss';
import './style/header.scss';
import './style/form.scss';
import './style/footer.scss';

import Header from './components/header';
import Form from './components/form';
import Footer from './components/footer';
import Results from './components/results';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  getResults = (url, method) => {
    this.setState({ url, method })

    console.log('hi back in app component')
    console.log(url, method)
  }

  render = () => (
    <div className="App">
      <Header />
      <main>
        <Form handleInput={this.getResults} />
      </main>
      <Footer />
      {/* <Results /> */}
    </div>
  );
}

export default App;
