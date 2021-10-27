import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageWrapper from './features/PageWrapper';
import PersonCardContainer from './features/personGrabber/PersonCardContainer';
import AddPersonPage from './features/personGrabber/AddPersonPage';
import AddCarPage from './features/personGrabber/AddCarPage';
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
            <Route path='/Addperson' component={AddPersonPage} />
            <Route path='/Addcar' component={AddCarPage} />
          </Switch>
        </PageWrapper>
      </Router>
    </Provider>
  )
}

export default App;
