import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }


  renderCars = () => {
    return this.props.cars.map((car) => {
      return (
        <div className="car-item" key={car.id}>
          <h3>{car.brand}-{car.model}</h3>
          <p>owner: {car.owner}</p>
        </div>);
    });
  }

  render() {
    return (
      <div className="car-list">
        { this.renderCars() }
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
