import React, { useState, useEffect } from "react";

interface PersonInterface {
  first_name?: string
  last_name?: string
  email?: string
  birth_date?: string
  gender?: string
  bio?: string
}



export const AddPersonPage: React.FunctionComponent = () => {
  
  const [person, setPerson] = useState<PersonInterface>()

  const handleChange = (event: any) => {
    setPerson({...person, [event.target.name]: event.target.value})
  }

  useEffect(() => {
    console.log(person)
  })

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    const first_name = event.target

    // Do something 
    alert("");
  }


        return (
      
          <form className="requires-validation" noValidate onSubmit={submitForm} >
            <h3>Add a new person <span className="label label-default"></span></h3>
              <div className="col-md-12">
                <input type="text" className="form-control mt-3" required placeholder="First Name" name="first_name" onChange={handleChange}/>
                <div className="invalid-feedback">Name field is empty</div>
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control mt-3" required placeholder="Last Name" name="last_name" onChange={handleChange}/>
                <div className="invalid-feedback">Name field is empty</div>
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control mt-3" required placeholder="Email adress" name="email" onChange={handleChange} />
                <div className="invalid-feedback">Email field is empty</div>
              </div>
              <div className="col-md-12">
                <input type="date" className="form-control mt-3" placeholder="Date of birth" name="birth_date" onChange={handleChange} />
                <div className="invalid-feedback">Date field is empty</div>
              </div>
              <div className="form-group">
                <select className="form-select mt-3" name="gender" onChange={handleChange} >
                  <option selected disabled value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="col-md-12">
                <textarea className="form-control mt-3" placeholder="Biography" name="bio" onChange={handleChange}></textarea>
              </div>
              
            <div className="">
              <button type="submit" id="submit" className="btn btn-primary mt-3 mx-3" >Add Person</button>
              <button type="button" className="btn btn-primary mt-3">Switch</button>
            </div>
          </form>
        );
}
    
    
  
