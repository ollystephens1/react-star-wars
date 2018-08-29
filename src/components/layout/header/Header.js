import React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {_
  render() {
    return (
      <nav className="navbar bg-dark text-center">
        <Link to="/" className="navbar-brand">
          <img src="assets/img/logo.png" className="imng-fluid" height="50" />
        </Link>
      </nav>
    );
  }
}