import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions';


class CarsNew extends Component {

  handleSubmit = (values) => {
    this.props.createPost(values, (car) => {
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
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="brand" type="text" component={this.renderField} label="Brand"/>
        <Field name="model" type="text" component={this.renderField} label="Model"/>
        <Field name="owner" type="text" component={this.renderField} label="Owner"/>
        <Field name="plate" type="text" component={this.renderField} label="Plate"/>
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'newCarForm' })(
connect(null, { createPost })(CarsNew)
);
