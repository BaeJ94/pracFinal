import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';


class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            note: '',
        }
    }

    //handleSubmit

  render() {
    return (
        <div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="/">Clevernote</a>
                    </div>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="/about">About</a></li>
                        <li><a href="/notes">View Notes</a></li>
                    </ul>
                </div>
            </nav>
            <header>
                <h1 className='notes'>New Note</h1>
            </header>
            <div id="name">
                <input placeholder="Please Name"></input>
            </div>
            <br/>
            <div id="note">
                <textarea placeholder="Notes" cols="90" rows="10"></textarea>
            </div>
            <br/>
            <div id="submit">
                <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
            </div>
        </div>
    );
  }
}

export default New;