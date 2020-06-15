import {useState, forwardRef} from 'react';
import {connect} from 'react-redux';
import {signUp} from '../../store/user';

const SignUpForm = forwardRef(({open, signUpThunk}, ref) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (validInput()) {
      const userData = {
        first_name: firstName,
        last_name: lastName,
        email,
        password
      };
      signUpThunk(userData);
      // verify e-mail in your e-mail
    }
  };

  const validEmail = inputEmail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
  };

  const validPassword = inputPassword => {
    const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/.test(
      inputPassword
    );
    if (valid && inputPassword !== '') {
      return true;
    }
    return false;
  };

  const pwConfirm = () => {
    return password === confirmPassword;
  };

  const validInput = () => {
    if (firstName === '' || lastName === '') {
      alert('Please enter your full name.');
    }
    if (!validEmail(email)) {
      alert('Please enter a valid e-mail.');
      return false;
    }
    if (!validPassword(password)) {
      alert(
        `Password must contain
          at least 1 lowercase character
          at least 1 uppercase alphabetical character
          at least 1 numeric character
          at least 1 special character
          must be six characters or longer`
      );
      return false;
    }
    if (!pwConfirm()) {
      alert('Re-enter password');
      setPassword('');
      setConfirmPassword('');
      return false;
    }
    return true;
  };

  return (
    <div id="modal-body">
      <form ref={ref} type="submit">
        <div id="item">
          <input
            placeholder="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div id="item">
          <input
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div id="item">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div id="item">
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <div id="item" className="button">
          <button type="submit" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </form>

      <style jsx>
        {`
          #modal-body {
            margin: 0;
            padding: 0;
            background-color: rgba(211, 211, 211, 0.4);
            width: 100%;
            position: fixed;
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
          }
          form {
            background-color: white;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 30%;
            border: 1px solid black;
            margin: 10px;
          }
          #item {
            margin: 10px;
          }
          input {
            margin: 5px;
            border: 1px solid black;
            padding: 10px;
          }
          .button {
            margin: 5px;
            align-self: flex-end;
          }
        `}
      </style>
    </div>
  );
});

const mapState = state => ({
  user: state.user
});

const mapDispatch = dispatch => ({
  signUpThunk: data => dispatch(signUp(data))
});

// const forwardSignUpForm = forwardRef(SignUpForm);
export default connect(mapState, mapDispatch, null, {forwardRef: true})(
  SignUpForm
);
// export default SignUpForm;
