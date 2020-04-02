import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Body from './MainContent';
import './css/general.css';

class App extends React.Component {
  render() {
    return (
      <Router className="App">
        <Header />
        <Body />
      </Router>
    );
  }
}

export default App;
