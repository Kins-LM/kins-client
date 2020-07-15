import {useState, forwardRef, useRef} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/action/auth';
import styles from './SignUpForm.module.css';
import {setSuccess, setError, setReqError} from '../../util/userValidation';

const SignInForm = forwardRef(({signInThunk}, formRef) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const pwRef = useRef();
  const errorRef = useRef();

  const onSubmit = async e => {
    e.preventDefault();
    setSuccess(emailRef);
    setSuccess(pwRef);
    if (email.trim() === '') {
      setError(emailRef, 'Please enter your e-mail.');
      return;
    }
    if (password.trim() === '') {
      setError(pwRef, 'Please enter your password.');
      return;
    }
    const userData = {
      email: email.trim(),
      password
    };
    const error = await signInThunk(userData);
    if (error) {
      setReqError(errorRef, error);
    }
  };

  return (
    <div className={styles['modal-body']}>
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
        <div ref={errorRef} className={styles.item}>
          <small className={styles['error-item']} />
        </div>
        <div className={styles['button-item']}>
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </div>
      </form>
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
