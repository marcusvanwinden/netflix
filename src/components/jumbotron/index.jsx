import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Inner,
  Container,
  Title,
  SubTitle,
  Image,
  Pane,
} from './styles/jumbotron';

const Jumbotron = ({ direction = 'row', children }) => (
  <Item>
    <Inner direction={direction}>{children}</Inner>
  </Item>
);
Jumbotron.propTypes = {
  direction: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Jumbotron.Container = ({ children }) => <Container>{children}</Container>;
Jumbotron.Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.Title = ({ children }) => <Title>{children}</Title>;
Jumbotron.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.SubTitle = ({ children }) => <SubTitle>{children}</SubTitle>;
Jumbotron.SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.Image = ({ src, alt }) => <Image src={src} alt={alt} />;
Jumbotron.Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Jumbotron.Pane = ({ children }) => <Pane>{children}</Pane>;
Jumbotron.Pane.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Jumbotron;
