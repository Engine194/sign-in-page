const SUCCESS = undefined;

export const hasLengthAtLeast = function(value, minimumLength) {
  const message = `Must contain at least ${minimumLength} character(s).`;
  if (!value || value.length < minimumLength) {
    return message;
  }

  return SUCCESS;
};

export const isRequired = function (value) {
  const FAILURE = 'This field is required';

  // The field must have a value (no null or undefined) and
  // if it's a boolean, it must be `true`.
  if (!value) return FAILURE;

  // If it is a number or string, it must have at least one character of input (after trim).
  const stringValue = String(value).trim();
  const measureResult = hasLengthAtLeast(stringValue, null, 1);

  if (measureResult) return FAILURE;
  return SUCCESS;
};

export const validateEmail = function(value) {
  const checkEmpty = isRequired(value);
  if (checkEmpty) {
    return checkEmpty;
  }
  const message = 'Your email is not correct format';
  return /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/.test(
    value
  )
    ? SUCCESS
    : message;
};

export const validatePassword = function(value) {
  const checkEmpty = isRequired(value);
  if (checkEmpty) {
    return checkEmpty;
  }

  const count = {
    lower: 0,
    upper: 0,
    digit: 0,
    special: 0
  };

  for (const char of value) {
    if (/[a-z]/.test(char)) count.lower++;
    else if (/[A-Z]/.test(char)) count.upper++;
    else if (/\d/.test(char)) count.digit++;
    else if (/\S/.test(char)) count.special++;
  }

  if (Object.values(count).filter(Boolean).length < 3) {
    const message = 'A password must contain at least 3 of the following: lowercase, uppercase, digits, special characters.';
    return message;
  }

  return SUCCESS;
};