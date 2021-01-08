import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Loading, Header } from '../components';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import SelectProfileContainer from './profiles';
import FooterContainer from './footer';
import Images from '../context/images';

export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  const user = {
    displayName: 'Marcus',
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
    setSlideRows(slides.series);
  }

  function toFilms() {
    setCategory('films');
    setSlideRows(slides.films);
  }

  return profile.displayName ? (
    <>
      {loading ? (
        <Loading src={Images(`./users/${user.photoUrl}.png`)} />
      ) : (
        <Loading.ReleaseBody />
      )}

      <Header src="joker1.jpg" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src={Images('./misc/logo.svg')}
              alt="Netflix"
            />
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
                src={Images(`./users/${user.photoUrl}.png`)}
                alt={user.displayName}
              />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture
                    src={Images(`./users/${user.photoUrl}.png`)}
                    alt={user.displayName}
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
                    src={Images(
                      `./${category}/${item.genre}/${item.slug}/small.jpg`
                    )}
                    alt={item.title}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category} />
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
BrowseContainer.propTypes = {
  slides: PropTypes.shape({
    series: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(
          PropTypes.shape({
            description: PropTypes.string.isRequired,
            docId: PropTypes.string.isRequired,
            genre: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            maturity: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
          })
        ),
      })
    ).isRequired,
    films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(
          PropTypes.shape({
            description: PropTypes.string.isRequired,
            docId: PropTypes.string.isRequired,
            genre: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            maturity: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
          })
        ),
      })
    ).isRequired,
  }).isRequired,
};
