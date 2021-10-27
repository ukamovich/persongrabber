import React, { useState, useEffect } from "react";
import fetchGrabber from "../../_helpers/fetchGrabber";

const port = 3001 || process.env.REACT_APP_BACKEND_PORT
const backendURL = `http://localhost:${port}/graphql`

const initialPerson = {
  first_name: "",
  last_name: "",
  email: "",
  birthdate: "",
  gender: "",
  bio: ""
}

interface PersonInterface {
  first_name: string
  last_name: string
  email: string
  birthdate: string
  gender: string
  bio: string
}

function validateForm(person: PersonInterface): boolean {
  for (let [key, value] of Object.entries(person)) {
    if (!value) {
      alert(`${key} cannot be empty!`)
      return false
    }
  }
  return true
}


function AddPersonPage() {

  const [person, setPerson] = useState<PersonInterface>(initialPerson)
  const [id, setId] = useState("")

  const [genders, setGenders] = useState(["Male"])

  useEffect(() => {
    let query = {
      query: `
          query {
              generalPeopleInfo(distinct: "gender") {
                  distinct
              }
          }
      `
  }
  fetchGrabber(query, backendURL).then((res)=>{
      setGenders(res.data.generalPeopleInfo.distinct)
  })
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
    setPerson({ ...person, [event.target.name]: event.target.value })
  }


  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    if (validateForm(person)) {
      let queryBody = {
        query: `
          mutation {
            createPerson(data: {
              first_name: "${person.first_name}"
              last_name: "${person.last_name}"
              email: "${person.email}"
              birthdate: "${person.birthdate}"
              gender: "${person.gender}"
              bio: "${person.bio}"
            }) {
              _id
              first_name
            }
          }
        `
      }
      fetchGrabber(queryBody, backendURL).then(res => {
        alert("Success! New persons id is: " + res.data.createPerson._id)
        setPerson(initialPerson)
        setId(res.data.createPerson._id)
      })
    } else {
      console.log("Err!")
    }
  }


  return (

    <form onSubmit={submitForm} style={{textAlign: "center"}}>
      <h3>Add a new person <span className="label label-default"></span></h3>
      <div className="col-md-12">
        <input type="text" className="form-control mt-3" required placeholder="First Name" name="first_name" onChange={handleChange} />
      </div>
      <div className="col-md-12">
        <input type="text" className="form-control mt-3" required placeholder="Last Name" name="last_name" onChange={handleChange} />
      </div>
      <div className="col-md-12">
        <input type="text" className="form-control mt-3" required placeholder="Email adress" name="email" onChange={handleChange} />
      </div>
      <div className="col-md-12">
        <input type="date" className="form-control mt-3" placeholder="Date of birth" name="birthdate" onChange={handleChange} />
      </div>
      <div className="form-group">
        <select className="form-select mt-3" name="gender" onChange={handleChange} >
          <option disabled value="">Gender</option>
          {genders && genders.map(el => {return <option value={el} key={el}>{el}</option>})}
        </select>
      </div>
      <div className="col-md-12">
        <textarea className="form-control mt-3" placeholder="Biography" name="bio" onChange={handleChange}></textarea>
      </div>

      <button type="submit" id="submit" className="btn btn-primary mt-3 mx-3" >Submit</button>
      {id && (
        <p>New person id: {id}</p>
      )}
    </form>
  );
}

export default AddPersonPage



