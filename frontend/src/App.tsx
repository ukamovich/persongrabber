import "bootstrap/dist/css/bootstrap.css";
import "./features/personGrabber/validation";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageWrapper from './features/PageWrapper';
import PersonCardContainer from './features/personGrabber/PersonCardContainer';
import Navbar from './features/Navbar';
import { Provider } from 'react-redux';
import store from './store'

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <PageWrapper>
          <Switch>
            <Route path='/' exact component={PersonCardContainer} />
            {/* <Route path='/Addperson' component={Addperson} />
                  <Route path='/Addcar' component={Addcar} /> */}
          </Switch>
        </PageWrapper>
      </Router>
    </Provider>
  )
}

export default App;
