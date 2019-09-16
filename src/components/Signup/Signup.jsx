/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { validateSignupInputs } from '@Services/validations/signup';
import { setCurrentPage, signup } from '@Actions/index';
import Form from '@Components/common/Form/Form';
import FormField from '@Components/common/FormField/FormField';
import InputLabel from '@Components/common/InputLabel/InputLabel';
import InputElement from '@Components/common/InputElement/InputElement';
import Button from '@Components/common/Button/Button';
import './Signup.css';

class Signup extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    errors: {},
  };

  componentDidMount() {
    const { props } = this;
    props.setCurrentPage('signup');
  }

  handleChange = ({ target }) => {
    const { data } = this.state;
    this.setState({ data: { ...data, [target.name]: target.value } });
  };

  setInputElementClass = (inputName) => {
    const { errors } = this.state;
    const defaultValue = 'InputElement';
    return errors[inputName]
      ? `${defaultValue} InputElement--has-error`
      : defaultValue;
  };

  setValidationErrors = (errors) => this.setState({ errors });

  clearInputErrorMessage = ({ target }) => {
    const { errors } = this.state;
    this.setState({ errors: { ...errors, [target.name]: '' } });
  };

  setSignupError = () => {
    const { props } = this;
    this.setState((prevState) => ({
      errors: { ...prevState.errors, signup: props.signupStatus.error },
    }));
  };

  redirectUserToProfile = () => {
    const { history } = this.props;
    history.push('/profile');
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { state, props } = this;

    const validationErrors = validateSignupInputs(state.data);
    if (validationErrors) return this.setValidationErrors(validationErrors);

    await props.signup(state.data);
    if (this.props.signupStatus.error) return this.setSignupError();
    return this.redirectUserToProfile();
  };

  render() {
    const { data, errors } = this.state;

    return (
      <main className="Signup row">
        <section className="container">
          <Form
            className="Form Form--padded Form--centered Form--bordered"
            error={errors.signup}
            onSubmit={this.handleSubmit}
          >
            <FormField className="FormField" error={errors.firstName}>
              <InputLabel htmlFor="firstName" label="First Name" required />
              <InputElement
                className={this.setInputElementClass('firstName')}
                name="firstName"
                placeholder="e.g. John"
                type="text"
                value={data.firstName}
                onChange={this.handleChange}
                onFocus={this.clearInputErrorMessage}
              />
            </FormField>

            <FormField className="FormField" error={errors.lastName}>
              <InputLabel htmlFor="lastName" label="Last Name" required />
              <InputElement
                className={this.setInputElementClass('lastName')}
                name="lastName"
                placeholder="e.g. Doe"
                type="text"
                value={data.lastName}
                onChange={this.handleChange}
                onFocus={this.clearInputErrorMessage}
              />
            </FormField>

            <FormField className="FormField" error={errors.phone}>
              <InputLabel htmlFor="phone" label="Phone Number" required />
              <InputElement
                className={this.setInputElementClass('phone')}
                name="phone"
                placeholder="e.g. +2348012345678"
                type="tel"
                value={data.phone}
                onChange={this.handleChange}
                onFocus={this.clearInputErrorMessage}
              />
            </FormField>

            <FormField className="FormField" error={errors.email}>
              <InputLabel htmlFor="email" label="Email" required />
              <InputElement
                className={this.setInputElementClass('email')}
                name="email"
                placeholder="e.g. joe@domain.com"
                type="email"
                value={data.email}
                onChange={this.handleChange}
                onFocus={this.clearInputErrorMessage}
              />
            </FormField>

            <FormField className="FormField" error={errors.password}>
              <InputLabel htmlFor="password" label="Password" required />
              <InputElement
                className={this.setInputElementClass('password')}
                name="password"
                placeholder="e.g. *********"
                type="password"
                value={data.password}
                onChange={this.handleChange}
                onFocus={this.clearInputErrorMessage}
              />
            </FormField>

            <FormField className="FormField" error={errors.confirmPassword}>
              <InputLabel
                htmlFor="confirmPassword"
                label="Re-enter Password"
                required
              />
              <InputElement
                className={this.setInputElementClass('confirmPassword')}
                name="confirmPassword"
                placeholder="e.g. *********"
                type="password"
                value={data.confirmPassword}
                onChange={this.handleChange}
                onFocus={this.clearInputErrorMessage}
              />
            </FormField>

            <FormField className="FormField" error="">
              <Button className="Button Button--form" label="Sign Up" />
            </FormField>

            <p>
              Already have an account?{' '}
              <Link to="/login" className="link-in-p">
                Login
              </Link>
            </p>
          </Form>
        </section>
      </main>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.object.isRequired,
  signupStatus: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
};

const mapStateToProps = ({ signupStatus }) => ({ signupStatus });

export default connect(
  mapStateToProps,
  { setCurrentPage, signup }
)(Signup);
