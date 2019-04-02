import React, { Component } from 'react';
import Header from './components/Header';
import Pricing from './components/pages/Pricing';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Pricing />
        <Footer />
      </div>
    );
  }
}

export default App;
