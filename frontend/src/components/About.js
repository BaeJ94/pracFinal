import React, { Component } from 'react';


class About extends Component {
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
                <h1>About</h1>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
  }
}

export default About;