import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReachRouterLink } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink } from './styles/header';

const Header = ({ background = true, children }) =>
  background ? <Background>{children}</Background> : children;
Header.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool.isRequired,
};

Header.Frame = ({ children }) => <Container>{children}</Container>;
Header.Frame.propTypes = {
  children: PropTypes.node.isRequired,
};

Header.Logo = ({ to, src, alt }) => (
  <ReachRouterLink to={to}>
    <Logo src={src} alt={alt} />
  </ReachRouterLink>
);
Header.Logo.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Header.ButtonLink = ({ to, children }) => (
  <ButtonLink to={to}>{children}</ButtonLink>
);
Header.ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Header;
