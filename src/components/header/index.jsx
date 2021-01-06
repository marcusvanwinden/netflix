import React, { useState } from 'react';
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
  SearchIcon,
  SearchInput,
  Search,
  Profile,
  Picture,
  Dropdown,
} from './styles/header';
import SearchImage from '../../../images/icons/search.png';

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
  dontShowOnSmallViewPort: PropTypes.bool,
};

Header.Frame = ({ children }) => <Container>{children}</Container>;
Header.Frame.propTypes = {
  children: PropTypes.node.isRequired,
};

Header.Group = ({ children }) => <Group>{children}</Group>;
Header.Group.propTypes = {
  children: PropTypes.node.isRequired,
};

Header.Search = ({ searchTerm, setSearchTerm }) => {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <img src={SearchImage} alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
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
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
  onClick: PropTypes.func,
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

Header.Profile = ({ children }) => <Profile>{children}</Profile>;
Header.Profile.propTypes = {
  children: PropTypes.node.isRequired,
};

Header.Picture = ({ src, alt }) => <Picture src={src} alt={alt} />;
Header.Picture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Header.Dropdown = ({ children }) => <Dropdown>{children}</Dropdown>;
Header.Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
