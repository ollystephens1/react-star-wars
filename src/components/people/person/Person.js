
import React from 'react';

const Person = props => {
  console.log(props);
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <h5 className="card-header">{props.name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Birth year</b><span className="text-capitalize float-right small">{props.birth_year}</span></li>
          <li className="list-group-item"><b>Eye colour</b><span className="text-capitalize float-right small">{props.eye_color}</span></li>
          <li className="list-group-item"><b>Films</b><span className="text-capitalize float-right small">{props.films.length}</span></li>
          <li className="list-group-item"><b>Gender</b><span className="text-capitalize float-right small">{props.gender}</span></li>
          <li className="list-group-item"><b>Hair colour</b><span className="text-capitalize float-right small">{props.hair_color}</span></li>
          <li className="list-group-item"><b>Height</b><span className="text-capitalize float-right small">{props.height}</span></li>
          <li className="list-group-item"><b>Mass</b><span className="text-capitalize float-right small">{props.mass}</span></li>
          <li className="list-group-item"><b>Skin colour</b><span className="text-capitalize float-right small">{props.skin_color}</span></li>
          <li className="list-group-item"><b>Starships</b><span className="text-capitalize float-right small">{props.starships.length}</span></li>
          <li className="list-group-item"><b>Vehicles</b><span className="text-capitalize float-right small">{props.vehicles.length}</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Person;