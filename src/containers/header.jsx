import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import Logo from '../../images/misc/logo.svg';

export default function HeaderContainer({ children }) {
  return (
    <Header background>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={Logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
HeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
