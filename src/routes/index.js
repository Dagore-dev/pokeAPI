import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from '../views/Home';
import NotFound from '../views/NotFound';
import PokeDetail from '../views/PokeDetail';

const Routes = () => {

    return(
        <Router>
            <Switch>

                <Route path='/pokemon/:id'>
                    <PokeDetail />
                </Route>
                
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