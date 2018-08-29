import React from 'react';

const Planet = (props) => {
  return (
    <div className="col-md-4 mb-4 text-warning">
      <div className="card bg-dark">
        <h5 className="card-header">{props.name}</h5>

        <div class="text-center">
          <p className="text-capitalize lead pt-4">{props.climate}</p>
          <p className="small">{props.terrain}</p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark"><b>Diameter</b><span className="text-capitalize float-right small">{props.diameter}</span></li>
          <li className="list-group-item bg-dark"><b>Gravity</b><span className="text-capitalize float-right small">{props.gravity}</span></li>
          <li className="list-group-item bg-dark"><b>Population</b><span className="text-capitalize float-right small">{props.population}</span></li>
          <li className="list-group-item bg-dark"><b>Rotation period</b><span className="text-capitalize float-right small">{props.rotation_period}</span></li>
          <li className="list-group-item bg-dark"><b>Orbital period</b><span className="text-capitalize float-right small">{props.orbital_period}</span></li>
          <li className="list-group-item bg-dark"><b>Surface water</b><span className="text-capitalize float-right small">{props.surface_water}</span></li>
          <li className="list-group-item bg-dark"><b>Films</b><span className="text-capitalize float-right small">{props.films.length}</span></li>
          <li className="list-group-item bg-dark"><b>Residents</b><span className="text-capitalize float-right small">{props.residents.length}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Planet;
