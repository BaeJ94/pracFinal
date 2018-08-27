import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Clevernote</h1>
        </header>
        <nav>
          <button><Link to="/about">About</Link></button> {' '}
          <button><Link to="/notes">View Notes</Link></button>
        </nav>
      </div>
    );
  }
}

export default Home;