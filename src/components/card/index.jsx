import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureClose,
  FeatureText,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from './styles/card';
import Images from '../../context/images';

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
Card.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Group = ({ children }) => <Group>{children}</Group>;
Card.Group.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Title = ({ children }) => <Title>{children}</Title>;
Card.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.SubTitle = ({ children }) => <SubTitle>{children}</SubTitle>;
Card.SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Text = ({ children }) => <Text>{children}</Text>;
Card.Text.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Entities = ({ children }) => <Entities>{children}</Entities>;
Card.Entities.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Meta = ({ children }) => <Meta>{children}</Meta>;
Card.Meta.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Item = ({ item, children }) => {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
    >
      {children}
    </Item>
  );
};
Card.Item.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    maturity: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

Card.Image = ({ src, alt }) => <Image src={src} alt={alt} />;
Card.Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Card.Feature = ({ category }) => {
  const { showFeature, setShowFeature, itemFeature } = useContext(
    FeatureContext
  );
  return (
    showFeature && (
      <Feature
        src={Images(
          `./${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`
        )}
      >
        <Content>
          <FeatureTitle>{itemFeature.title}</FeatureTitle>
          <FeatureText>{itemFeature.description}</FeatureText>
          <FeatureClose onClick={() => setShowFeature(false)}>
            <img src={Images('./icons/close.png')} alt="Close" />
          </FeatureClose>
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
    )
  );
};
Card.Feature.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Card;
