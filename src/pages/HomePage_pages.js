import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import queryString from 'query-string';
import Login from './LoginPage_pages';
import {setAccessToken} from '../Data/redux/accessTokenSlice';

const Home = () => {
  const accessToken = useSelector((state) => state.accessToken.value);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const parsed = queryString.parse(window.location.hash);
    dispatch(setAccessToken(parsed.access_token));
  }, [accessToken, dispatch]);

  useEffect(() => {
    accessToken !== undefined && (
      history.push('create-playlist')
    );
  }, [accessToken, history]);

  return (
    <div className='logincard'>
      <h2>Spotify Playlist</h2>
      <h3 className='aci'>Asyrie Chaeranie KM_G2FE4016</h3>
      <Login />
    </div>
  );
};

export default Home;