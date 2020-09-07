import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

class CarsNew extends Component {

  onSubmit = (values) => {
    this.props.createCar(values, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && (error && <span>{error}</span>)}
      </div>
    </div>
  )

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="brand" type="text" component={this.renderField} label="Brand"/>
        <Field name="model" type="text" component={this.renderField} label="Model"/>
        <Field name="owner" type="text" component={this.renderField} label="Owner"/>
        <Field name="plate" type="text" component={this.renderField} label="Plate"/>
        <div>
          <button type="submit" disabled={pristine || submitting}>Add car</button>
        </div>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.brand) { errors.brand = 'Required'; }
  if (!values.model) { errors.model = 'Required'; }
  if (!values.owner) { errors.owner = 'Required'; }
  if (!values.plate) { errors.plate = 'Required'; }
  else if (!/^[A-Z\d-]+$/.test(values.plate)) { errors.plate = 'Only numbers and capital letters'; }

  return errors;
};

export default reduxForm({ form: 'newCarForm', validate })(connect(null, { createCar })(CarsNew));
