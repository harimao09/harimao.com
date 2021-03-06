const Validator = require('validator');
const isEmpty = require('./isEmpty')

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';

  if(!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.email = 'Handle needs to between 2 and 40 characters';
  }

  if(Validator.isEmpty(data.handle)) {
    errors.email = 'Profile Handle is required';
  }

  if(Validator.isEmpty(data.status)) {
    errors.email = 'Status field is required';
  }

  if(Validator.isEmpty(data.skills)) {
    errors.email = 'Skills field is required';
  }

  if(!isEmpty(data.website)) {
    if(!Validator.isURL(data.website)) {
      errors.email = 'Not valid a URL';
    }
  }

  if(!isEmpty(data.twitter)) {
    if(!Validator.isURL(data.twitter)) {
      errors.email = 'Not valid a URL';
    }
  }

  if(!isEmpty(data.facebook)) {
    if(!Validator.isURL(data.facebook)) {
      errors.email = 'Not valid a URL';
    }
  }

  if(!isEmpty(data.youtube)) {
    if(!Validator.isURL(data.youtube)) {
      errors.email = 'Not valid a URL';
    }
  }

  if(!isEmpty(data.linkedin)) {
    if(!Validator.isURL(data.linkedin)) {
      errors.email = 'Not valid a URL';
    }
  }

  if(!isEmpty(data.instagram)) {
    if(!Validator.isURL(data.instagram)) {
      errors.email = 'Not valid a URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}