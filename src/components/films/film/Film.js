import React from 'react';

const Film = props => {
  console.log(props);

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <h5 className="card-header">{props.title}</h5>

         <div className="text-center">
          <p className="text-capitalize lead pt-4">Episode {props.episode_id}</p>
          <p className="text-muted small px-2 text-justify">{props.opening_crawl}</p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Director</b><span className="text-capitalize float-right small">{props.director}</span></li>
          <li className="list-group-item"><b>Planets</b><span className="text-capitalize float-right small">{props.planets.length}</span></li>
          <li className="list-group-item"><b>Producer</b><span className="text-capitalize float-right small">{props.producer}</span></li>
          <li className="list-group-item"><b>Release data</b><span className="text-capitalize float-right small">{props.release_date}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Film;