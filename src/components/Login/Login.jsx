import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentPage } from '@Actions/index';
import Form from '@Components/common/Form/Form';
import FormField from '@Components/common/FormField/FormField';
import InputLabel from '@Components/common/InputLabel/InputLabel';
import InputElement from '@Components/common/InputElement/InputElement';

class Login extends Component {
  state = {
    data: {
      email: '',
      password: '',
    },
  };

  componentDidMount() {
    const { props } = this;
    props.setCurrentPage('login');
  }

  clearInputErrorMessage = () => {};

  handleChange = ({ target }) => {
    const { data } = this.state;
    this.setState({ data: { ...data, [target.name]: target.value } });
  };

  handleSubmit = () => {};

  render() {
    const {
      state: { data },
    } = this;

    return (
      <main className="Login row">
        <div className="container">
          <Form
            className="Form Form--centered Form--bordered Form--padded"
            onSubmit={this.handleSubmit}
          >
            <FormField className="FormField">
              <InputLabel htmlFor="email" label="Email" required />
              <InputElement
                className="InputElement"
                name="email"
                placeholder="e.g. john@domain.com"
                type="email"
                value={data.email}
                onChange={this.handleChange}
                onFocus={this.clearInputErrorMessage}
              />
            </FormField>

            <FormField className="FormField">
              <InputLabel htmlFor="password" label="Password" required />
              <InputElement
                className="InputElement"
                name="password"
                placeholder="e.g. ********"
                type="password"
                value={data.password}
                onChange={this.handleChange}
                onFocus={this.clearInputErrorMessage}
              />
            </FormField>
          </Form>
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default connect(
  null,
  { setCurrentPage }
)(Login);
