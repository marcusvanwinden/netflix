import React, {
  useState,
  useContext,
  createContext,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from './styles/accordion';
import Images from '../../context/images';

const ToggleContext = createContext();

const Accordion = ({ children }) => (
  <Container>
    <Inner>{children}</Inner>
  </Container>
);
Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Title = ({ children }) => <Title>{children}</Title>;
Accordion.Title.propTypes = {
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

Accordion.Header = ({ children }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(!toggleShow)}>
      {children}
      {toggleShow ? (
        <img src={Images('./icons/close-slim.png')} alt="Close" />
      ) : (
        <img src={Images('./icons/add.png')} alt="Open" />
      )}
    </Header>
  );
};
Accordion.Header.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Body = ({ children }) => {
  const { toggleShow } = useContext(ToggleContext);
  const [bodyHeight, setBodyHeight] = useState(null);
  const bodyRef = useRef(null);

  useEffect(() => setBodyHeight(bodyRef.current.scrollHeight), []);

  useEffect(() => {
    if (toggleShow) {
      bodyRef.current.classList.add('active');
    } else {
      bodyRef.current.classList.remove('active');
    }
  });

  return (
    <Body ref={bodyRef} bodyHeight={bodyHeight}>
      {children}
    </Body>
  );
};
Accordion.Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Accordion;
