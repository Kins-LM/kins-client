import {useState, forwardRef, useRef} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/user';
import styles from './SignUpForm.module.css';

const SignInForm = forwardRef(({signInThunk}, formRef) => {
  const emailRef = useRef();
  const pwRef = useRef();
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    const userData = {
      email,
      password
    };
    signInThunk(userData);
    e.preventDefault();
    setSignInSuccess(true);
  };

  return (
    <div className={styles['modal-body']}>
      {signInSuccess ? null : (
        <form
          ref={formRef}
          type="submit"
          onSubmit={onSubmit}
          className={styles.form}
        >
          <h2 className={styles.h2}>Welcome</h2>
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
          <div className={styles['button-item']}>
            <button type="submit" className={styles.button}>
              Sign In
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
  signInThunk: data => dispatch(signIn(data))
});

export default connect(mapState, mapDispatch, null, {forwardRef: true})(
  SignInForm
);
