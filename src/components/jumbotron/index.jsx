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

export default function Jumbotron({ children, direction = 'row' }) {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string.isRequired,
};

Jumbotron.Container = function JumbotronContainer({ children }) {
  return <Container>{children}</Container>;
};

Jumbotron.Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.Title = function JumbotronTitle({ children }) {
  return <Title>{children}</Title>;
};

Jumbotron.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
};

Jumbotron.SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.Image = function JumbotronImage({ src, alt }) {
  return <Image src={src} alt={alt} />;
};

Jumbotron.Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Jumbotron.Pane = function JumbotronPane({ children }) {
  return <Pane>{children}</Pane>;
};

Jumbotron.Pane.propTypes = {
  children: PropTypes.node.isRequired,
};
