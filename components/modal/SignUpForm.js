import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {signUp} from '../../store/user';

const SignUpForm = props => {
  const {open, signUpThunk} = props;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (validInput()) {
      console.log('good');
      // const userData = {
      //   first_name: firstName,
      //   last_name: lastName,
      //   email,
      //   password
      // };
      // signUpThunk(userData);
    }
  };

  const validEmail = inputEmail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
  };

  const validPassword = inputPassword => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(
      inputPassword
    );
  };

  const pwConfirm = () => {};

  const validInput = () => {
    if (firstName === '' || lastName === '') {
      alert('Please enter your full name.')
    }
    if (!pwConfirm) {
      alert('Re-enter password');
      setPassword('');
      setConfirmPassword('');
      return false;
    }

    if (!validEmail(email)) {
      alert('Please enter a valid e-mail.');
      return false;
    }
    if (!validPassword) {
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
    return true;
  };

  return open ? (
    <div id="container">
      <form type="submit">
        <input
          placeholder="First Name"
          // value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          placeholder="Last Name"
          // value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <input
          placeholder="Email Address"
          // value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          // value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          // value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </form>

      <style jsx>
        {`
          #container {
            background-color: pink;
            width: 150px;
          }
        `}
      </style>
    </div>
  ) : null;
};

const mapState = state => ({
  user: state.user
});

const mapDispatch = dispatch => ({
  signUpThunk: data => dispatch(signUp(data))
});

export default connect(mapState, mapDispatch)(SignUpForm);
