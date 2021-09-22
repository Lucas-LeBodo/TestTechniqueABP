import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch,} from "react-router-dom";

// import page
import Home from '../pages/home.jsx';

// Router

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    {/* User Router */}
                    <Route path='/' component={Home} exact={true} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    );
};

export default AppRouter;