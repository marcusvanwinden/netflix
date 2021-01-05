import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderContainer from '../containers/header';
import { Form } from '../components';
import FooterContainer from '../containers/footer';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';

export default function SignUp() {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { firebase } = useContext(FirebaseContext);

  const isInvalid = emailAddress === '' || password === '';

  function handleSignup(event) {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user.updateProfile({
          displayName: firstName,
          photoUrl: Math.floor(Math.random() * 5) + 1,
        })
      )
      .then(() => {
        setEmailAddress('');
        setPassword('');
        setError('');
        history.push(ROUTES.HOME);
      })
      .catch((err) => setError(err.message));
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
              autoComplete="off"
            />
            <Form.Input
              type="email"
              placeholder="Email Address"
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
              Sign Up
            </Form.Submit>
            <Form.Text>
              {'Already a user? '}
              <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
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
