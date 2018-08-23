import React from 'react';

const tile = (props) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default tile;

