import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from '../views/Home';
import NotFound from '../views/NotFound';

const Routes = () => {

    return(
        <Router>
            <Switch>

                <Route exact path='/'>
                    <Home />
                </Route>

                <Route>
                    <NotFound />
                </Route>

            </Switch>
        </Router>
    )
}

export default Routes;