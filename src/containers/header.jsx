import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import Images from '../context/images';

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src={Images('./misc/logo.svg')}
          alt="Netflix"
        />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
HeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
