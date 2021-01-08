import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Error,
  Input,
  Submit,
} from './styles/form';

const Form = ({ children }) => <Container>{children}</Container>;
Form.propTypes = {
  children: PropTypes.node.isRequired,
};

Form.Base = ({ method, onSubmit, children }) => (
  <Base onSubmit={onSubmit} method={method}>
    {children}
  </Base>
);
Form.Base.propTypes = {
  method: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Form.Title = ({ children }) => <Title>{children}</Title>;
Form.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Form.Text = ({ children }) => <Text>{children}</Text>;
Form.Text.propTypes = {
  children: PropTypes.node.isRequired,
};

Form.TextSmall = ({ children }) => <TextSmall>{children}</TextSmall>;
Form.TextSmall.propTypes = {
  children: PropTypes.node.isRequired,
};

Form.Link = ({ to, children }) => <Link to={to}>{children}</Link>;
Form.Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Form.Error = ({ children }) => <Error>{children}</Error>;
Form.Error.propTypes = {
  children: PropTypes.node.isRequired,
};

Form.Input = ({ type, placeholder, value, onChange, autoComplete }) => (
  <Input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    autoComplete={autoComplete}
  />
);
Form.Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string.isRequired,
};

Form.Submit = ({ type, disabled, children }) => (
  <Submit disabled={disabled} type={type}>
    {children}
  </Submit>
);
Form.Submit.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
