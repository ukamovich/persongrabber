import "bootstrap/dist/css/bootstrap.css";
import { HashRouter, Switch, Route } from 'react-router-dom';

import PageWrapper from './features/PageWrapper';
import PersonCardContainer from './features/personGrabber/PersonCardContainer';
import AddPersonPage from './features/personGrabber/AddPersonPage';
import AddCarPage from './features/personGrabber/AddCarPage';
import Navbar from './features/Navbar';
import Footer from './features/Footer'
import { Provider } from 'react-redux';
import store from './store'

function App() {

  return (
    <Provider store={store}>
      <HashRouter basename="/">
        <Navbar />
        <PageWrapper>
          <Switch>
            <Route path='/' exact component={PersonCardContainer} />
            <Route path='/add-person' component={AddPersonPage} />
            <Route path='/add-car' component={AddCarPage} />
          </Switch>
        </PageWrapper>
        <Footer/>
      </HashRouter>
    </Provider>
  )
}

export default App;
