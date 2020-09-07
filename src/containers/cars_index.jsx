import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }


  renderCars = () => {
    return this.props.cars.map((car) => {
      return (
        <div className="car-item" key={car.id}>
          <Link to={`/cars/show/${car.id}`}>
            <h3>{car.brand}-{car.model}</h3>
            <p>owner: {car.owner}</p>
          </Link>
        </div>);
    });
  }

  render() {
    return (
      <div className="car-list">
        { this.renderCars() }
        <Link to="/cars/new"> Add a car</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cars: state.cars };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
