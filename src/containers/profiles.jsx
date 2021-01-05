import React from 'react';
import PropTypes from 'prop-types';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import Logo from '../../images/misc/logo.svg';

export default function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header background={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={Logo} alt="Netflix" />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who&apos;s watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoUrl: user.photoUrl,
              })
            }
          >
            <Profiles.Picture src={user.photoUrl} alt="Profile picture" />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
SelectProfileContainer.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoUrl: PropTypes.string,
  }).isRequired,
  setProfile: PropTypes.func.isRequired,
};
