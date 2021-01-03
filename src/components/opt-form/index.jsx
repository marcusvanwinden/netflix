import React from 'react';
import PropTypes from 'prop-types';
import chevronRight from '../../../images/icons/chevron-right.png';
import { Container, Input, Button, Text, Break } from './styles/opt-form';

const OptForm = ({ children }) => <Container>{children}</Container>;
OptForm.propTypes = {
  children: PropTypes.node.isRequired,
};

OptForm.Input = ({ placeholder }) => <Input placeholder={placeholder} />;
OptForm.Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

OptForm.Button = ({ children }) => (
  <Button>
    {children}
    <img src={chevronRight} alt="Try Now" />
  </Button>
);
OptForm.Button.propTypes = {
  children: PropTypes.node.isRequired,
};

OptForm.Text = ({ children }) => <Text>{children}</Text>;
OptForm.Text.propTypes = {
  children: PropTypes.node.isRequired,
};

OptForm.Break = () => <Break />;

export default OptForm;
