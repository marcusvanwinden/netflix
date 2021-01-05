import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderContainer from '../containers/header';
import { Form } from '../components';
import FooterContainer from '../containers/footer';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';

export default function Signin() {
  const history = useHistory();
  const [error, setError] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);

  const isInvalid = emailAddress === '' || password === '';

  function handleSignin(event) {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        setEmailAddress('');
        setPassword('');
        setError('');
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => setError(err.message));
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              type="email"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
              autoComplete="off"
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              autoComplete="off"
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
            <Form.Text>
              {'New to Netflix? '}
              <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
