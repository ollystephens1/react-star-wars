import React, { Component } from 'react';
import instance from '../../http/instance';
import Spinner from '../layout/spinner/Spinner';
import Animal from './animal/Animal';

export default class Species extends Component {
  state = {
    species: [],
    loading: true
  };

  componentDidMount() {
    instance.get('https://swapi.co/api/species')
      .then(res => {
        const species = res.data.results;
        this.setState({ species: species, loading: false });
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
          {this.state.species.map((animal, i) => (
            <Animal key={i} {...animal}/>
          ))}
        </div>
      </div>
    );
  }
}
