import React, { useState } from 'react';
import './App.css';
import PageWrapper from './components/PageWrapper';
import "bootstrap/dist/css/bootstrap.css";
import "./components/validation";
import PersonCard from "./components/PersonCard"
import PersonCardContainer from './components/PersonCardContainer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import Search from './components/Search';
//import Filter from './components/Filter';
//import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
//import Addcar from './components/Addcar';

let backendPort = process.env.REACT_APP_BACKEND_PORT || 3001
function App() {
  let [name, setName] = useState("")
  let [age, setAge] = useState(-1)
  let [gender, setGender] = useState("")

  let [isGet, setIsGet] = useState(false)

  let handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if ((name === "" || age < 0) && !isGet) {
      return
    }

    let queryBody = {
      query: `
        query {
          people {
            name
            age
            gender
          }
        }
      `
    }

    if (!isGet) {
      queryBody = {
        query: `
          mutation {
            createPerson(name: "${name}", age: ${age}, gender: ${gender}) {
              name
              age
              gender
            }
          }
        `
      }
    }

    fetch(`http://localhost:${backendPort}/graphql`, {
      method: "POST",
      body: JSON.stringify(queryBody),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error("Some error occured!")
      }
      return res.json()
    }).then(resData => {
      console.log(resData)
    }).catch(err => {
      console.log(err)
    })
  }

  let switchMode = () => {
    setIsGet(!isGet)
  }

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
