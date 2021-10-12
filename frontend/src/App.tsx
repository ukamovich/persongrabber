import React, { useState } from 'react';
import './App.css';

let backendPort = process.env.REACT_APP_BACKEND_PORT || 3001
function App() {
  let [name, setName] = useState("")
  let [age, setAge] = useState(-1)

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
          }
        }
      `
    }

    if (!isGet) {
      queryBody = {
        query: `
          mutation {
            createPerson(name: "${name}", age: ${age}) {
              name
              age
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={event => setName(event.target.value)}/><br/>
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" onChange={event => setAge(parseInt(event.target.value))}/><br/>
        <input type="submit" value={isGet ? "Get people" : "Add person"}/>
        <input type="button" onClick={switchMode} value="Switch"/>
      </form>
    </div>
  );
}

export default App;
