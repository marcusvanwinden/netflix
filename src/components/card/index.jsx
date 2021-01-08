import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../../../images/icons/close.png';
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureClose,
  Maturity,
  Context,
  Meta,
  Entities,
  Item,
  Image,
} from './styles/card';

const FeatureContext = createContext();

const Card = ({ children }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState(false);
  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container>{children}</Container>
    </FeatureContext.Provider>
  );
};

Card.Group = ({ children }) => {
  return <Group>{children}</Group>;
};
Card.Group.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Title = ({ children }) => {
  return <Title>{children}</Title>;
};
Card.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.SubTitle = ({ children }) => {
  return <SubTitle>{children}</SubTitle>;
};
Card.SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Text = ({ children }) => {
  return <Text>{children}</Text>;
};
Card.Text.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Entities = ({ children }) => {
  return <Entities>{children}</Entities>;
};
Card.Entities.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Meta = ({ children }) => {
  return <Meta>{children}</Meta>;
};
Card.Meta.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Item = ({ children, item }) => {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
    >
      {' '}
      {children}
    </Item>
  );
};

Card.Image = ({ src }) => {
  return <Image src={src} />;
};

Card.Feature = ({ children, category }) => {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );
  return showFeature ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureCloses onClick={() => setShowFeature(false)}>
          <img src={CloseButton} alt="Close" />
        </FeatureCloses>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
      </Content>
    </Feature>
  ) : null;
};

export default Card;
