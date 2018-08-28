import React, { Component } from 'react';
import instance from '../../http/instance';
import Planet from './planet/Planet';
import Spinner from '../layout/spinner/Spinner';

export default class Planets extends Component {

  state = {
    planets: [],
    loading: true
  };

  componentDidMount() {
    instance.get('https://swapi.co/api/planets')
      .then(res => {
        const planets = res.data.results;
        this.setState({ planets: planets, loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
      })
  }

  render() {
    const spinner = this.state.loading ? <Spinner /> : null;
    return (
      <div className="container">
        <div className="row pt-4">
          {spinner}
          {this.state.planets.map((planet, i) => (
            <Planet key={i} { ...planet} />
          ))}
        </div>
      </div>
    );
  }
}
