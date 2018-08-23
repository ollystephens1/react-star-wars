import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Header from './header/Header';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header/>
        <main>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;
