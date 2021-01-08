import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Videos from '../../context/videos';
import { Container, Inner, Overlay, Button, Close } from './styles/player';

export const PlayerContext = createContext();

const Player = ({ children }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container>{children}</Container>
    </PlayerContext.Provider>
  );
};
Player.propTypes = {
  children: PropTypes.node.isRequired,
};

Player.Video = () => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return (
    showPlayer &&
    ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer(false)}>
        <Inner>
          <video id="netflix-player" controls autoPlay>
            <source
              src={Videos('./never-gonna-give-you-up.mp4')}
              type="video/mp4"
            />
            <track kind="captions" />
          </video>
          <Close />
        </Inner>
      </Overlay>,
      document.body
    )
  );
};

Player.Button = () => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return <Button onClick={() => setShowPlayer(!showPlayer)}>Play</Button>;
};

export default Player;
