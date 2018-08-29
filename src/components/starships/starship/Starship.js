import React from 'react';

const Starship = props => {
  console.log(props);
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <h5 className="card-header">{props.name}</h5>

        <div className="text-center">
          <p className="text-capitalize lead pt-4">{props.model}</p>
          <p className="text-muted small">{props.manufacturer}</p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Cargo capacity</b><span className="text-capitalize float-right small">{props.cargo_capacity}</span></li>
          <li className="list-group-item"><b>Consumables</b><span className="text-capitalize float-right small">{props.consumables}</span></li>
          <li className="list-group-item"><b>Cost (credits)</b><span className="text-capitalize float-right small">{props.cost_in_credits}</span></li>
          <li className="list-group-item"><b>Crew</b><span className="text-capitalize float-right small">{props.crew}</span></li>
          <li className="list-group-item"><b>Films</b><span className="text-capitalize float-right small">{props.films.length}</span></li>
          <li className="list-group-item"><b>Hyperdrive</b><span className="text-capitalize float-right small">{props.hyperdrive_rating}</span></li>
          <li className="list-group-item"><b>Length</b><span className="text-capitalize float-right small">{props.length}</span></li>
          <li className="list-group-item"><b>Max speed</b><span className="text-capitalize float-right small">{props.max_atmosphering_speed}</span></li>
          <li className="list-group-item"><b>Passengers</b><span className="text-capitalize float-right small">{props.passengers}</span></li>
          <li className="list-group-item"><b>Class</b><span className="text-capitalize float-right small">{props.starship_class}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Starship;