import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../pages/journal/JournalScreen';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/auth" component={AuthRouter} isLogged={false} />
                    <PrivateRoute path="/" component={JournalScreen} isLogged={false} />
                </Switch>
            </div>
        </Router>
    )
}
