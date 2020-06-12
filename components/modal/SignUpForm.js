import {useState} from 'react';
import {connect} from 'react-redux';
import {signUp} from '../../store/user';

const SignUpForm = props => {
  const {open, signUpThunk} = props;
  const {firstName, setFirstName} = useState('');
  const {lastName, setLastName} = useState('');
  const {email, setEmail} = useState('');
  const {password, setPassword} = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const userData = {
      first_name: firstName,
      last_name: lastName,
      email,
      password
    };
    signUpThunk(userData);
  };

  const validEmail = inputEmail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
  };

  const validPassword = inputPassword => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(
      inputPassword
    );
  };

  const match = () => {};

  return open ? (
    <div id="container">
      <form type="submit">
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Email Address" />
        <input placeholder="Password" />
        <input placeholder="Confirm Password" />
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
