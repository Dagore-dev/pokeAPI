import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import ScrollToTop from '../components/useScrollToTop';

import Home from '../views/Home';
import NotFound from '../views/NotFound';
import PokeDetail from '../views/PokeDetail';

const Routes = () => {

    return(
        <Router>

            <ScrollToTop />

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