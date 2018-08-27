import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Notes from './components/ViewNotes';
import New from './components/NewNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/notes" component={Notes} />
          <Route path="/notes/new" component={New} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
