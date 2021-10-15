import React, { useState } from 'react';
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
//import Addcar from './components/Addcar';

function App() {

  return (
    
    <div className="App">
      <div className="">

        
          <Router>
          
            <Navbar />'
            <PageWrapper>
              <Switch>
                <Route path='/Homepage' exact component={PersonCardContainer} />
                {/* <Route path='/Search' component={null} /> */}
                {/* <Route path='/Filter' component={Filter} />
                <Route path='/Addperson' component={Addperson} />
                <Route path='/Addcar' component={Addcar} /> */}
              </Switch>
            </PageWrapper>
          </Router> 
        
          
      </div>
    </div>
  )}

export default App;
