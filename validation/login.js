const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if(!validator.isEmail(data.email)) {
    errors.Email = "Email is invalid";
  }
  if(validator.isEmpty(data.email)) {
    errors.Email = "Email field is required";
  }
  if(validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  }
}
