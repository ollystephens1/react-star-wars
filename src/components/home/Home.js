import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from './Tile/Tile';

const mapPropsToState = state => {
  return { tiles: state.tiles };
}

const ConnectedHome = ({ tiles }) => {
  return (
    <div className="container">
      <div className="row pt-4">
        {tiles.map((tile, i) => (
          <Tile key={i} name={tile.name} />
        ))}
      </div>
    </div>
  );
}

const Home = connect(mapPropsToState)(ConnectedHome);

export default Home; 