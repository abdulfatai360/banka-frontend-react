export const name = (value, label) => {
  const errors = [];
  const nameRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  if (!value) errors.push(`${label} is required`);
  if (!nameRegExp.test(value)) errors.push(`${label} should be a valid name`);
  if (value.length < 2) errors.push('name should be minimum of 2 characters');
  if (value.length > 50) errors.push('name should be 50 characters or less');

  return errors[0];
};

export const phone = (value) => {
  const errors = [];
  const phoneRegExp = /^(\+234|234)[0-9]{10}$/;

  if (!value) errors.push('phone number is required');
  if (!phoneRegExp.test(value)) {
    errors.push('enter a valid Nigerian number, prefixed by +234 or 234');
  }

  return errors[0];
};

export const email = (value) => {
  const errors = [];
  const emailRegExp = /^[\w._]+@[\w]+[-.]?[\w]+\.[\w]+$/;

  if (!value) errors.push('email is required');
  if (emailRegExp.test(email)) errors.push('enter a valid email address');
  if (value.length > 254) errors.push('email should be 254 characters or less');

  return errors[0];
};

export const password = (value) => {
  const errors = [];

  if (!value) errors.push('password is required');
  if (!/\s/.test(password)) errors.push('password should not contain spaces');
  if (value.length < 6) errors.push('password should be 2 characters or more');
  if (value.length > 254) {
    errors.push('password should not be more than 254 characters');
  }

  return errors[0];
};

export const confirmPassword = (value, passwordValue) => {
  const errors = [];
  if (passwordValue !== value || !value) errors.push('passwords do not match');
  return errors[0];
};

export const validateSignupInputs = (userData) => {
  const errorMessages = {
    firstName: name(userData.firstName, 'first name'),
    lastName: name(userData.lastName, 'last name'),
    phone: phone(userData.phone),
    email: email(userData.email),
    password: password(userData.password),
    confirmPassword: confirmPassword(
      userData.confirmPassword,
      userData.password
    ),
  };

  const error = Object.values(errorMessages).filter((err) => err);
  return error.length ? errorMessages : null;
};
