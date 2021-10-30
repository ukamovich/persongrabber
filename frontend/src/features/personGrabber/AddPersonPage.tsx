import React, { useState, useEffect } from "react";
import fetchGrabber, { backendURL } from "../../_helpers/fetchGrabber";

const initialPerson = {
  first_name: "",
  last_name: "",
  email: "",
  birthdate: "",
  gender: "Male",
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

/**
 * Page for adding new persons
 * @returns new page
 */

function AddPersonPage() {

  const [person, setPerson] = useState<PersonInterface>(initialPerson)
  const [id, setId] = useState("")

  const [genders, setGenders] = useState(["Male", "Female"])

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
    
    var forms = document.querySelectorAll('.needs-validation')

    // Preventing the page from reloading
    event.preventDefault();

    //Check validation all the input fields
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
          if (!form.checkValidity()) {
            form.classList.add("was-validated")
            event.stopPropagation();
          }
          else {
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
              setPerson(initialPerson)
              setId(res.data.createPerson._id)
            }).catch(err => {
              alert(err)
            })
          }
        }, false)
  }


  return (

    <form className="needs-validation" noValidate onSubmit={submitForm} style={{textAlign: "center"}}>
      <h3>Add a new person <span className="label label-default"></span></h3>
      <div className="col-md-12">
        <input value={person.first_name} type="text" pattern="[a-zA-ZæøåÆØÅöÖÄäëË]{2,20}" className="form-control mt-3" required placeholder="First Name" name="first_name" onChange={handleChange} />
      </div>
      <div className="invalid-feedback">Please enter a valid first name</div>
      <div className="col-md-12">
        <input value={person.last_name} type="text" pattern="[a-zA-ZæøåÆØÅöÖÄäëË]{2,20}" className="form-control mt-3" required placeholder="Last Name" name="last_name" onChange={handleChange} />
      </div>
      <div className="invalid-feedback">Please enter a valid last name</div>
      <div className="col-md-12">
        <input value={person.email} type="text" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" className="form-control mt-3" required placeholder="Email adress" name="email" onChange={handleChange} />
      </div>
      <div className="invalid-feedback">Please enter a valid email</div>
      <div className="col-md-12">
        <input value={person.birthdate} type="date" required max={new Date().toISOString().split('T')[0]} className="form-control mt-3" placeholder="Date of birth" name="birthdate" onChange={handleChange} />
      </div>
      <div className="invalid-feedback">Please enter a valid date</div>
      <div className="form-group">
        <select value={person.gender} className="form-select mt-3" name="gender" onChange={handleChange} >
          <option disabled value="">Gender</option>
          {genders && genders.map(el => {return <option value={el} key={el}>{el}</option>})}
        </select>
      </div>
      <div className="invalid-feedback">Please select a gender</div>
      <div className="col-md-12">
        <textarea value={person.bio} required className="form-control mt-3" placeholder="Biography" name="bio" onChange={handleChange}></textarea>
      </div>
      <div  className="invalid-feedback">Bio cant be empty</div>

      <button type="submit" id="submit" className="btn btn-primary mt-3 mx-3" >Add Person</button>
      {id && (
        <><div className="alert alert-success alert-dismissible d-flex align-items-center fade show mt-3">
          <i className="bi-check-circle-fill"></i>
          <strong className="mx-2">Success!</strong> New person id: <br/> {id}
        </div></>
      )}
    </form>
  );
}

export default AddPersonPage



