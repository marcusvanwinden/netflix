import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Column,
  Row,
  Link,
  Title,
  Break,
  Text,
} from './styles/footer';

const Footer = ({ children }) => <Container>{children}</Container>;
Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Row = ({ children }) => <Row>{children}</Row>;
Footer.Row.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Column = ({ children }) => <Column>{children}</Column>;
Footer.Column.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Link = ({ href, children }) => <Link href={href}>{children}</Link>;
Footer.Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Footer.Title = ({ children }) => <Title>{children}</Title>;
Footer.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Text = ({ children }) => <Text>{children}</Text>;
Footer.Text.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.Break = () => <Break />;

export default Footer;
