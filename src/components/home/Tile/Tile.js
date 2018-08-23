import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Tile.css';


const tile = withRouter((props) => (
  <div className={[classes.Tile, 'col-md-4', 'mb-4'].join(' ')} onClick={() => props.history.push(props.link)}>
    <div className="card">
      <img src={'assets/img/' + props.icon} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
      </div>
    </div>
  </div>)
);

export default tile;
