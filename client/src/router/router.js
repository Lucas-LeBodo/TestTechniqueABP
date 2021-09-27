import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch,} from "react-router-dom";

// import page
import Home from '../pages/home.jsx';
import Log from '../pages/log.jsx';
// Router

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    {/* User Router */}
                    <Route path='/' component={Home} exact={true} />
                    <Route path='/log' component={Log} exact={true} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    );
};

export default AppRouter;