import React, { useState, useEffect, useContext } from 'react';
import { Card, Loading, Header } from '../components';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import SelectProfileContainer from './profiles';
import FooterContainer from './footer';
import Logo from '../../images/misc/logo.svg';

const UserImages = require.context('../../images/users/');
const AllImages = require.context('../../images/');

export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  const user = {
    displayName: 'Karl',
    photoUrl: '1',
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [user]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  function toSeries() {
    setCategory('series');
    setSlideRows(slides['series']);
  }

  function toFilms() {
    setCategory('films');
    setSlideRows(slides['films']);
  }

  return profile.displayName ? (
    <>
      {loading ? (
        <Loading src={UserImages(`./${user.photoUrl}.png`)} />
      ) : (
        <Loading.ReleaseBody />
      )}

      <Header src="joker1.jpg" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={Logo} alt="Netflix" />
            <Header.Link
              active={category === 'series' ? 'true' : 'false'}
              onClick={toSeries}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === 'films' ? 'true' : 'false'}
              onClick={toFilms}
            >
              Films
            </Header.Link>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture
                src={UserImages(`./${user.photoUrl}.png`)}
                alt="User"
              />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture
                    src={UserImages(`./${user.photoUrl}.png`)}
                    alt="User"
                  />
                  <Header.Link>{user.displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he&apos;s part of the
            world around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    // src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                    src={AllImages(
                      `./${category}/${item.genre}/${item.slug}/small.jpg`
                    )}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
