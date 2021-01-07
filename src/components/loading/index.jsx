import React from 'react';
import PropTypes from 'prop-types';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

const Loading = ({ src }) => (
  <Spinner>
    <LockBody />
    <Picture src={src} />
  </Spinner>
);
Loading.propTypes = {
  src: PropTypes.string,
};

Loading.ReleaseBody = () => <ReleaseBody />;

export default Loading;
