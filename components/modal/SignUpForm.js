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
        <h2>Sign up for a Free Account</h2>
        <div className="item">
          <div className="input">
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
          <small>Please enter your full name.</small>
        </div>
        <div className="item">
          <div className="input">
            <input
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <small>Please enter a valid e-mail.</small>
        </div>
        <div className="item">
          <div className="input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <small>Click here for password requirements.</small>
        </div>
        <div className="item">
          <div className="input">
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
          <small>Passwords did not match.</small>
        </div>
        <div className="button">
          <button type="submit" onSubmit={onSubmit}>
            Register
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
          h2 {
            align-self: flex-start;
            font-size: 20px;
          }
          .item {
            margin: 10px;
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .error {
            border: 1px solid red;
          }
          .input {
            display: flex;
          }
          input {
            margin: 5px;
            border: 1px solid gray;
            padding: 10px;
            width: 100%;
          }
          input:focus,
          input:active {
            outline: none;
            border: 1px solid black;
          }
          small {
            visibility: hidden;
            font-size: 70%;
            color: red;
            margin: 42px 10px 0px 10px;
            position: absolute;
          }
          .button {
            margin: 5px;
            align-self: flex-end;
          }
          button {
            padding: 10px 30px;
            border: none;
            border-radius: 6px;
            color: white;
            background-color: blue;
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