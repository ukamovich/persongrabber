import React, { useState } from 'react';
import './App.css';
import PageWrapper from './components/PageWrapper';
import "bootstrap/dist/css/bootstrap.css";
import Navbar  from './components/Navbar';
import "./components/validation";
import PersonCard from "./components/PersonCard"
import PersonCardContainer from './components/PersonCardContainer';

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
    <PageWrapper>
    <div className="App">
      <div className="">
        <Navbar/>
        
      <div>

        </div>
        <form className="requires-validation" noValidate onSubmit={handleSubmit}>
          <h3>Add a new person <span className="label label-default"></span></h3>
            <div className="col-md-12">
              <input type="text" className="form-control mt-3" required placeholder="Name" name="name" onChange={event => setName(event.target.value)}/>
              <div className="invalid-feedback">Name field is empty</div>
            </div>
            <div className="col-md-12">
              <input type="number" className="form-control mt-3" placeholder="Age" name="age" onChange={event => setAge(parseInt(event.target.value))}/>
              <div className="invalid-feedback">Age field is empty</div>
            </div>
            <div className="form-group">
              <select className="form-select mt-3" name="name" onChange={event => setGender(event.target.value)} id="exampleFormControlSelect1">
                <option selected disabled value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            
          <div className="">
            <button type="submit" id="submit" className="btn btn-primary mt-3 mx-3" >{isGet ? "Get people" : "Add person"}</button>
            <button type="button" className="btn btn-primary mt-3" onClick={switchMode} >{"Switch"}</button>
          </div>
        </form>
        <div>
          <PersonCardContainer/>
        </div>
          
          
        
        
      </div>
    </div>
    </PageWrapper>
  );
}

export default App;
