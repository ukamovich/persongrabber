import React, { useEffect, useState } from "react";
import fetchGrabber, { backendURL } from "../../_helpers/fetchGrabber";

interface CarInterface {
  name: string
  company: string
  production_year: number
  price: number
  owner: string
}

const initialCar: CarInterface = {
  name: "",
  company: "",
  production_year: NaN,
  price: NaN,
  owner: ""
}

function AddCarPage() {

  const [car, setCar] = useState<CarInterface>(initialCar)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setCar({ ...car, [event.target.name]: event.target.value })
  }


  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    
    var forms = document.querySelectorAll('.needs-validation')

    // Preventing the page from reloading
    event.preventDefault();

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
            console.log(queryBody)
            fetchGrabber(queryBody, backendURL).then(res => {
              console.log(res)
              alert("Success! New cars id is: " + res.data.createCar._id)
              setCar(initialCar)
            }).catch(err => {
              alert("You need a persons id!")
            })
          }
        }, false)
  }


  return (

    <form onSubmit={submitForm} noValidate className="needs-validation" style={{textAlign: "center"}}>
      <h3>Add a new car <span className="label label-default"></span></h3>
      <div className="col-md-12">
        <input value={car.name} type="text" required pattern="[a-zA-Z0-9]{2,20}" className="form-control mt-3" placeholder="Car model" name="name" onChange={handleChange}/>
      </div>
      <div className="invalid-feedback">Please enter a valid car model</div>
      <div className="col-md-12">
        <input value={car.company} type="text" required pattern="[a-zA-Z0-9]{2,20}" className="form-control mt-3" placeholder="Manufactorer" name="company" onChange={handleChange}/>
      </div>
      <div className="invalid-feedback">Please pick a car manufactorer</div>
      <div className="col-md-12">
        <input value={isNaN(car.production_year) ? "" : car.production_year} type="number" required pattern="[0-9{4}]" min="1900" max="2022" className="form-control mt-3" placeholder="Production year" name="production_year" onChange={handleChange}/>
      </div>
      <div className="invalid-feedback">Production year on form YYYY</div>
      <div className="col-md-12">
        <input value={isNaN(car.price) ? "" : car.price} type="number" required min="0" className="form-control mt-3" placeholder="Price" name="price" onChange={handleChange}/>
      </div>
      <div className="invalid-feedback">Enter a valid price</div>
      <div className="col-md-12">
        <input value={car.owner} type="text" required className="form-control mt-3" placeholder="Owner ID" name="owner" onChange={handleChange}/>
      </div>
      <div className="invalid-feedback">Enter an owner id</div>
      <div className="">
        <button type="submit" id="submit" className="btn btn-primary mt-3 mx-3" >Add car</button>
      </div>
    </form>
  );
}

export default AddCarPage