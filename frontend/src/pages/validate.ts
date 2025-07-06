export const checkMaxLength = (value: string, lengthLimit: number) => {
  return value.length <= lengthLimit ? '' : `Max linit is ${lengthLimit}`;
};

export const checkMinLength = (value: string, lengthLimit: number) => {
  return value.length >= lengthLimit ? '' : `Min limit is ${lengthLimit}`;
};

export const checkRequire = (value: string) => {
  return !value ? 'require' : '';
};

export const checkEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) ? '' : 'Enter a valid email addres';
};

export const checkLogin = (value: string) => {
  const loginRegex = /^[a-zA-Z0-9]+$/;
  return loginRegex.test(value) ? '' : 'Only letters and numbers';
};

export const checkNames = (value: string) => {
  const nameRegex = /^[a-zA-Z]+$/u;
  return nameRegex.test(value) ? '' : 'Letters only';
};

export const checkPassword = (value: string) => {
  const hasDigit = /\d/.test(value);
  const hasLetter = /[A-Za-z]/.test(value);

  if (!hasLetter || !hasDigit) {
    return 'Include letters and numbers';
  }
};
