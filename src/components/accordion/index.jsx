import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Frame,
  Inner,
  Item,
  Title,
  Header,
  Body,
} from './styles/accordion';
import CloseIcon from '../../../images/icons/close-slim.png';
import OpenIcon from '../../../images/icons/add.png';

const ToggleContext = createContext();

const Accordion = ({ children }) => (
  <Container>
    <Inner>{children}</Inner>
  </Container>
);
Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Frame = ({ children }) => <Frame>{children}</Frame>;
Accordion.Frame.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Item = ({ children }) => {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item>{children}</Item>
    </ToggleContext.Provider>
  );
};
Accordion.Item.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Title = ({ children }) => <Title>{children}</Title>;
Accordion.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Header = ({ children }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(!toggleShow)}>
      {children}
      {toggleShow ? (
        <img src={CloseIcon} alt="Close" />
      ) : (
        <img src={OpenIcon} alt="Open" />
      )}
    </Header>
  );
};
Accordion.Header.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Body = ({ children }) => {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body>{children}</Body> : null;
};
Accordion.Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Accordion;
