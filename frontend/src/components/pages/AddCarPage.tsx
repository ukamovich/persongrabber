import React, { useEffect, useState } from "react";
import fetchGrabber, { backendURL } from "../../_helpers/fetchGrabber";

interface CarInterface {
  name: String
  company: String
  production_year: number
  price: number
  owner: string
}

const initialCar: CarInterface = {
  name: "",
  company: "",
  production_year: 0,
  price: 0,
  owner: ""
}

function validateForm(car: CarInterface): boolean {
  for (let [key, value] of Object.entries(car)) {
    if (!value) {
      alert(`${key} cannot be empty!`)
      return false
    }
  }
  return true
}

export function AddCarPage() {

  const [car, setCar] = useState<CarInterface>(initialCar)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setCar({ ...car, [event.target.name]: event.target.value })
  }


  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    if (validateForm(car)) {
      let queryBody = {
        query: `
          mutation {
            createCar(data: {
              name: "${car.name}"
              company: "${car.company}"
              production_year: ${car.production_year}
              price: ${car.price}
              owner: "${car.owner}"
            }) {
              _id
            }
          }
        `
      }
      fetchGrabber(queryBody, backendURL).then(res => {
        alert("Success! New cars id is: " + res.data.createCar._id)
        setCar(initialCar)
      })
    } else {
      console.log("Err!")
    }
  }


  return (

    <form onSubmit={submitForm} style={{textAlign: "center"}}>
      <h3>Add a new car <span className="label label-default"></span></h3>
      <div className="col-md-12">
        <input type="text" className="form-control mt-3" required placeholder="Car model" name="name" onChange={handleChange}/>
      </div>
      <div className="col-md-12">
        <input type="text" className="form-control mt-3" placeholder="Manufactorer" name="company" onChange={handleChange}/>
      </div>
      <div className="col-md-12">
        <input type="number" className="form-control mt-3" placeholder="Production year" name="production_year" onChange={handleChange}/>
      </div>
      <div className="col-md-12">
        <input type="number" className="form-control mt-3" placeholder="Price" name="price" onChange={handleChange}/>
      </div>
      <div className="col-md-12">
        <input type="text" className="form-control mt-3" placeholder="Owner ID" name="owner" onChange={handleChange}/>
      </div>

      <div className="">
        <button type="submit" id="submit" className="btn btn-primary mt-3 mx-3" >Add car</button>
      </div>
    </form>
  );
}