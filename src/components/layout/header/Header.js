import React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {_
  render() {
    return (
      <nav className="navbar bg-dark text-center">
        <Link to="/" className="navbar-brand">
          <img src="assets/img/logo.png" height="50" />
        </Link>

        <span class="text-warning mr-0">Made by <a href="https://github.com/ollystephens1" target="_blank" class="text-warning">Darth Olly</a></span>
      </nav>
    );
  }
}