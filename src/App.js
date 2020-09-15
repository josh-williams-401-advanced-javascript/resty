import React from 'react';
import './App.css';

import Header from './components/header';
import Form from './components/form';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
