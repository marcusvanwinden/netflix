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

Form.Base = ({ children, onSubmit, method }) => (
  <Base onSubmit={onSubmit} method={method}>
    {children}
  </Base>
);
Form.Base.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
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

Form.Link = ({ children, to }) => <Link to={to}>{children}</Link>;
Form.Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
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

Form.Submit = ({ children, disabled, type }) => (
  <Submit disabled={disabled} type={type}>
    {children}
  </Submit>
);
Form.Submit.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default Form;
