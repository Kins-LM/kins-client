export const validEmail = inputEmail => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
};

export const validPassword = inputPassword => {
  const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/.test(
    inputPassword
  );
  if (valid && inputPassword !== '') {
    return true;
  }
  return false;
};

export const pwConfirm = (password, confirmPassword) => {
  return password === confirmPassword && password !== '';
};

export const setError = (ref, msg) => {
  const inputTag = ref.current.children[0].children;
  const smallTag = ref.current.children[1];

  inputTag[0].style.borderColor = 'red';

  if (inputTag[1]) {
    inputTag[1].style.borderColor = 'red';
  }
  smallTag.innerText = msg;
  return false;
};

export const setSuccess = ref => {
  const inputTag = ref.current.children[0].children;
  const smallTag = ref.current.children[1];

  inputTag[0].style.borderColor = 'gray';
  if (inputTag[1]) {
    inputTag[1].style.borderColor = 'gray';
  }
  smallTag.innerText = '';
};

export const setReqError = (ref, msg) => {
  const smallTag = ref.current.children[0];
  smallTag.innerText = msg;
};
