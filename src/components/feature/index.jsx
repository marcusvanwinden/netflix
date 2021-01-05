import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, SubTitle } from './styles/feature';

const Feature = ({ children }) => <Container>{children}</Container>;
Feature.propTypes = {
  children: PropTypes.node.isRequired,
};

Feature.Title = ({ children }) => <Title>{children}</Title>;
Feature.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Feature.SubTitle = ({ children }) => <SubTitle>{children}</SubTitle>;
Feature.SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Feature;
