import React from 'react';

const Animal = props => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <h5 className="card-header">{props.name}</h5>

        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Average height</b><span className="text-capitalize float-right small">{props.average_height}</span></li>
          <li className="list-group-item"><b>Average lifespan</b><span className="text-capitalize float-right small">{props.average_lifespan}</span></li>
          <li className="list-group-item"><b>Classification</b><span className="text-capitalize float-right small">{props.classification}</span></li>
          <li className="list-group-item"><b>Designation</b><span className="text-capitalize float-right small">{props.designation}</span></li>
          <li className="list-group-item"><b>Eye colours</b><span className="text-capitalize float-right small">{props.eye_colors}</span></li>
          <li className="list-group-item"><b>Films</b><span className="text-capitalize float-right small">{props.films.length}</span></li>
          <li className="list-group-item"><b>Language</b><span className="text-capitalize float-right small">{props.language}</span></li>
          <li className="list-group-item"><b>Hair colours</b><span className="text-capitalize float-right small">{props.hair_colors}</span></li>
          <li className="list-group-item"><b>Skin colours</b><span className="text-capitalize float-right small">{props.skin_colors}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Animal;