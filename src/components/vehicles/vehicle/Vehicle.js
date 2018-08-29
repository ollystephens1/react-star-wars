import React from 'react';

const Vehicle = props => {
  return (
    <div className="col-md-4 mb-4 text-warning">
      <div className="card bg-dark">
        <h5 className="card-header">{props.name}</h5>

         <div class="text-center">
          <p className="text-capitalize lead pt-4">{props.model}</p>
          <p className="small">{props.manufacturer}</p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark"><b>Cargo capacity</b><span className="text-capitalize float-right small">{props.cargo_capacity}</span></li>
          <li className="list-group-item bg-dark"><b>Consumables</b><span className="text-capitalize float-right small">{props.consumables}</span></li>
          <li className="list-group-item bg-dark"><b>Cost (credits)</b><span className="text-capitalize float-right small">{props.cost_in_credits}</span></li>
          <li className="list-group-item bg-dark"><b>Crew</b><span className="text-capitalize float-right small">{props.crew}</span></li>
          <li className="list-group-item bg-dark"><b>Films</b><span className="text-capitalize float-right small">{props.films.length}</span></li>
          <li className="list-group-item bg-dark"><b>Length</b><span className="text-capitalize float-right small">{props.length}</span></li>
          <li className="list-group-item bg-dark"><b>Max speed</b><span className="text-capitalize float-right small">{props.max_atmosphering_speed}</span></li>
          <li className="list-group-item bg-dark"><b>Passengers</b><span className="text-capitalize float-right small">{props.passengers}</span></li>
          <li className="list-group-item bg-dark"><b>Class</b><span className="text-capitalize float-right small">{props.vehicle_class}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Vehicle;