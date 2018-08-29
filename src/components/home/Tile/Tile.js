import React from 'react';
import { withRouter } from 'react-router-dom';


const tile = withRouter((props) => (
  <div className="col-md-4 mb-4 tile" onClick={() => props.history.push(props.link)}>
    <div className="card">
      <img src={'assets/img/' + props.icon} />
      <div className="card-body bg-dark text-warning">
        <h5 className="card-title">{props.name}</h5>
      </div>
    </div>
  </div>)
);

export default tile;
