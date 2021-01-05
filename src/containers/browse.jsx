import React, { useState } from 'react';
import SelectProfileContainer from './profiles';
import FooterContainer from './footer';

export default function BrowseContainer() {
  const [profile, setProfile] = useState({});

  const user = {
    displayName: 'Karl',
    photoUrl: '1',
  };

  return profile.displayName ? (
    <>
      <p>Browse</p>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
