import React from 'react';
import PropTypes from 'prop-types';
import Images from '../../context/images';
import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

const Profiles = ({ children }) => <Container>{children}</Container>;
Profiles.propTypes = {
  children: PropTypes.node.isRequired,
};

Profiles.Title = ({ children }) => <Title>{children}</Title>;
Profiles.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Profiles.List = ({ children }) => <List>{children}</List>;
Profiles.List.propTypes = {
  children: PropTypes.node.isRequired,
};

Profiles.User = ({ onClick, children }) => (
  <Item onClick={onClick}>{children}</Item>
);
Profiles.User.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Profiles.Picture = ({ src, alt }) => (
  <Picture
    src={src ? Images(`./users/${src}.png`) : Images('./misc/loading.gif')}
    alt={alt}
  />
);
Profiles.Picture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Profiles.Name = ({ children }) => <Name>{children}</Name>;
Profiles.Name.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Profiles;
