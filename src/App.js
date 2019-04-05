import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/pages/About';
import Pricing from './components/pages/Pricing';
import Product from './components/pages/Product';
import Footer from './components/Footer';
import './styles/Core.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact component={Product} />
            <Route path="/about" component={About} />
            <Route path="/pricing" component={Pricing} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
