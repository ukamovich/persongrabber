import "bootstrap/dist/css/bootstrap.css";
import "./components/validation";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageWrapper from './components/PageWrapper';
import PersonCardContainer from './components/PersonCardContainer';
//import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
//import Addcar from './components/Addcar';

function App() {

  return (
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
  )}

export default App;
