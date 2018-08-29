import React, { Component } from 'react';
import instance from '../../http/instance';
import Spinner from '../layout/spinner/Spinner';
import Starship from './starship/Starship';

export default class Starships extends Component {
  state = {
    starships: [],
    loading: true
  };

  componentDidMount() {
    instance.get('https://swapi.co/api/starships')
      .then(res => {
        const starships = res.data.results;
        this.setState({ starships: starships, loading: false });
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
          {this.state.starships.map((starship, i) => (
            <Starship key={i} {...starship}/>
          ))}
        </div>
      </div>
    );
  }
}
