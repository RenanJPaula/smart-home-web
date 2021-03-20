import { Location } from 'history';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DevicesPage from './devices-page/devices-page';
import LampForm from './lamp-form/lamp-form';

export interface ApplicationRouteProps {
    location?: Location
}

const ApplicationRoute: React.FC<ApplicationRouteProps> = ({ location }) => {
    return (
        <Switch location={location}>
            <Route path="/" component={DevicesPage} exact />
            <Route path="/lamp" component={LampForm} />
        </Switch>
    );
};

export default ApplicationRoute;


