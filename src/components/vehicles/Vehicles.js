import React, { Component } from 'react';
import instance from '../../http/instance';
import Spinner from '../layout/spinner/Spinner';
import Vehicle from './vehicle/Vehicle';

export default class Vehicles extends Component {
  state = {
    vehicles: [],
    loading: true
  };

  componentDidMount() {
    instance.get('https://swapi.co/api/vehicles')
      .then(res => {
        const vehicles = res.data.results;
        this.setState({ vehicles: vehicles, loading: false });
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
          {this.state.vehicles.map((vehicle, i) => (
            <Vehicle key={i} {...vehicle}/>
          ))}
        </div>
      </div>
    );
  }
}
