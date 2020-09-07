import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCar, deleteCar } from '../actions/index';

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.deleteCar(this.props.car.id, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  render() {
    if (!this.props.car) {
      return <p>...loading</p>;
    }

    return (
      <div className="car-item" key={this.props.car.id}>
        <h3>{this.props.car.brand}-{this.props.car.model}</h3>
        <p>owner: {this.props.car.owner}</p>
        <p>plate: {this.props.car.plate}</p>
        <Link to="/">Back</Link>
        <button type="button" onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const car = state.cars.find(p => p.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
