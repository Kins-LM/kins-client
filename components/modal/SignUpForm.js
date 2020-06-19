import {useState, forwardRef, useRef} from 'react';
import {connect} from 'react-redux';
import {signUp} from '../../store/user';
import {
  validEmail,
  validPassword,
  pwConfirm,
  setSuccess,
  setError
} from '../../util/userValidation';
import styles from './SignUpForm.module.css';
import SignUpSuccess from './SignUpSuccess';

const SignUpForm = forwardRef(({signUpThunk}, formRef) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const pwRef = useRef();
  const pwcRef = useRef();

  const validInput = () => {
    let res = 'true';
    if (firstName === '' || lastName === '') {
      res = setError(nameRef, 'Please enter your full name.');
    } else {
      setSuccess(nameRef);
    }

    if (!validEmail(email)) {
      res = setError(emailRef, 'Please enter a valid e-mail.');
    } else {
      setSuccess(emailRef);
    }

    if (!validPassword(password)) {
      // TODO: add tooltip
      res = setError(pwRef, 'Click here for password requirements.');
    } else {
      setSuccess(pwRef);
    }

    if (!pwConfirm(password, confirmPassword)) {
      setPassword('');
      setConfirmPassword('');
      res = setError(pwcRef, 'Passwords must match.');
    } else {
      setSuccess(pwcRef);
    }

    return res;
  };

  const onSubmit = e => {
    e.preventDefault();
    if (validInput()) {
      const userData = {
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim(),
        password
      };
      signUpThunk(userData);
      setSignUpSuccess(true);
    }
  };

  return (
    <div className={styles['modal-body']}>
      {signUpSuccess ? (
        <SignUpSuccess />
      ) : (
        <form
          ref={formRef}
          type="submit"
          onSubmit={onSubmit}
          className={styles.form}
        >
          <h2 className={styles.h2}>Sign up for a Free Account</h2>
          <div ref={nameRef} className={styles.item}>
            <div className={styles['input-item']}>
              <input
                className={styles.input}
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <input
                className={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            <small className={styles.small} />
          </div>
          <div ref={emailRef} className={styles.item}>
            <div className={styles['input-item']}>
              <input
                className={styles.input}
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <small className={styles.small} />
          </div>
          <div ref={pwRef} className={styles.item}>
            <div className={styles['input-item']}>
              <input
                className={styles.input}
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <small className={styles.small} />
          </div>
          <div ref={pwcRef} className={styles.item}>
            <div className={styles['input-item']}>
              <input
                className={styles.input}
                type="password"
                name="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
            <small className={styles.small} />
          </div>
          <div className={styles['button-item']}>
            <button type="submit" className={styles.button}>
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
});

const mapState = state => ({
  user: state.user
});

const mapDispatch = dispatch => ({
  signUpThunk: data => dispatch(signUp(data))
});

export default connect(mapState, mapDispatch, null, {forwardRef: true})(
  SignUpForm
);

// `Password must contain
//           at least 1 lowercase character
//           at least 1 uppercase alphabetical character
//           at least 1 numeric character
//           at least 1 special character
//           must be six characters or longer`
