import React, { useState } from 'react';
import './App.css';
import PageWrapper from './components/PageWrapper';
import "bootstrap/dist/css/bootstrap.css";

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
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Person Grabber</a>
            </div>
            <ul className="nav navbar-nav flex-row mx-3">
              <li className="active mx-3"><a href="#">Home</a></li>
              <li><a href="#">Add Person</a></li>
            </ul>
            
          </div>
        </nav>
      <div>

        </div>
        <form className="form-group mt-3" onSubmit={handleSubmit}>
          <h3>Add a new person <span className="label label-default"></span></h3>
            <div className="form-group mt-3">
              <input type="text" className="form-control mt-3" placeholder="Name" name="name" onChange={event => setName(event.target.value)}/>
              <input type="number" className="form-control mt-3" placeholder="Age" name="age" onChange={event => setAge(parseInt(event.target.value))}/>
            </div>
            <div className="form-group">
              <select className="form-select mt-3" name="name" onChange={event => setGender(event.target.value)} id="exampleFormControlSelect1">
                <option selected disabled value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            
          <div className="">
            <button type="button" className="btn btn-primary mt-3 mx-3" >{isGet ? "Get people" : "Add person"}</button>
            <button type="button" className="btn btn-primary mt-3" onClick={switchMode} >{"Switch"}</button>
          </div>
        </form>
      </div>
    </div>
    </PageWrapper>
  );
}

export default App;
