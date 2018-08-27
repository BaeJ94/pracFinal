import React, { Component } from 'react';


class Notes extends Component {
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
                <h1 className='notes'>All Notes</h1>
            </header>
            <p>
            </p>
        </div>
    );
  }
}

export default Notes;