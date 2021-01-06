import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Group,
  Text,
  Link,
  Feature,
  FeatureCallOut,
  PlayButton,
} from './styles/header';

const Header = ({
  background = true,
  src,
  dontShowOnSmallViewPort,
  children,
}) =>
  background ? (
    <Background dontShowOnSmallViewPort={dontShowOnSmallViewPort} src={src}>
      {children}
    </Background>
  ) : (
    children
  );
Header.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool.isRequired,
  src: PropTypes.string,
};

Header.Frame = ({ children }) => <Container>{children}</Container>;
Header.Frame.propTypes = {
  children: PropTypes.node.isRequired,
};

Header.Group = ({ children }) => <Group>{children}</Group>;
Header.Group.propTypes = {
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

Header.Text = ({ children }) => <Text>{children}</Text>;
Header.Text.propTypes = {
  children: PropTypes.node.isRequired,
};

Header.Link = ({ to, active, onClick, children }) => (
  <Link to={to} active={active} onClick={onClick}>
    {children}
  </Link>
);
Header.Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  active: PropTypes.string.isRequired,
};

Header.ButtonLink = ({ to, children }) => (
  <ButtonLink to={to}>{children}</ButtonLink>
);
Header.ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Header.Feature = ({ children }) => <Feature>{children}</Feature>;
Header.Feature.propTypes = {
  children: PropTypes.node.isRequired,
};

Header.FeatureCallOut = ({ children }) => (
  <FeatureCallOut>{children}</FeatureCallOut>
);
Header.FeatureCallOut.propTypes = {
  children: PropTypes.node.isRequired,
};

Header.PlayButton = ({ children }) => <PlayButton>{children}</PlayButton>;
Header.PlayButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
