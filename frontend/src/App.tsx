import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "./components/validation";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageWrapper from './components/PageWrapper';
import PersonCardContainer from './components/PersonCardContainer';
//import Search from './components/Search';
//import Filter from './components/Filter';
//import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { AddPersonPage } from './components/pages/AddPersonPage';
import { AddCarPage } from './components/pages/AddCarPage';

//import Addcar from './components/Addcar';

function App() {

  return (
    <div className="App">
          <Router>
            <Navbar />'
            <PageWrapper>
              <Switch>
                <Route path='/Homepage' exact component={PersonCardContainer} />
                <Route path='/Addperson' component={AddPersonPage} />
                <Route path='/Addcar' component={AddCarPage} />
              </Switch>
            </PageWrapper>
          </Router>           
    </div>
  )}

export default App;
