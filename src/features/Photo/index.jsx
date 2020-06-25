import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

// import NotFound from 'components/NotFound';
import Addedit from './pages/Addedit';
import Main from './pages/main';
import NotFound from '../../components/NotFound';

Photo.propTypes = {};

function Photo(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={Main} />

            <Route path={`${match.url}/add`} component={Addedit} />

            <Route component={NotFound} />
        </Switch>
    );
}

export default Photo;