import React, { Component } from 'react';
import instance from '../../http/instance';
import Spinner from '../layout/spinner/Spinner';
import Film from './film/Film';

export default class Films extends Component {
  state = {
    films: [],
    loading: true
  };

  componentDidMount() {
    instance.get('https://swapi.co/api/films')
      .then(res => {
        const films = res.data.results;
        this.setState({ films: films, loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    const spinner = this.state.loading ? <Spinner /> : null;
    return (
      <div className="container">
        <div className="row pt-4">
          {spinner}
          {this.state.films.map((film, i) => (
            <Film key={i} {...film}/>
          ))}
        </div>
      </div>
    );
  }
}
