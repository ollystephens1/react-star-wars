import React, { Component } from 'react';
import instance from '../../http/instance';
import Spinner from '../layout/spinner/Spinner';
import Person from './person/Person';

export default class People extends Component {

  state = {
    people: [],
    loading: true
  };

  componentDidMount() {
    instance.get('https://swapi.co/api/people')
      .then(res => {
        const people = res.data.results;
        this.setState({ people: people, loading: false });
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
          {this.state.people.map((person, i) => (
            <Person key={i} {...person}/>
          ))}
        </div>
      </div>
    );
  }
}
