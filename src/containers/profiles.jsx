import React from 'react';
import PropTypes from 'prop-types';
import Images from '../context/images';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';

export default function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header background={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src={Images('./misc/logo.svg')}
            alt="Netflix"
          />
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
            <Profiles.Picture src={user.photoUrl} alt={user.displayName} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
SelectProfileContainer.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  }).isRequired,
  setProfile: PropTypes.func.isRequired,
};
