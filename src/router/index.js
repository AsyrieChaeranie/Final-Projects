import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import CreatePlaylist from '../pages/CreatePlaylist_pages';
import Home from '../pages/HomePage_pages';
const AppRouter = () => {
    const accessToken = useSelector((state) => state.accessToken.value);
    return (
        < Router >
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create-playlist">
                    {accessToken !== undefined ? <CreatePlaylist /> : <Redirect to="/" />}
                </Route>
                <Route path="*" component={() => (<h1> 404 Error Not Found </h1>)} />
            </Switch>
        </Router >
    );
};

export default AppRouter;