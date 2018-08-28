import React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {_
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">Star Wars</Link>
      </nav>
    );
  }
}