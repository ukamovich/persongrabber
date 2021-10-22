

export function AddPersonPage() {
    
      
        return (
      
          <form className="requires-validation" noValidate >
            <h3>Add a new person <span className="label label-default"></span></h3>
              <div className="col-md-12">
                <input type="text" className="form-control mt-3" required placeholder="First Name" name="name" />
                <div className="invalid-feedback">Name field is empty</div>
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control mt-3" required placeholder="Last Name" name="name" />
                <div className="invalid-feedback">Name field is empty</div>
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control mt-3" required placeholder="Email adress" name="email" />
                <div className="invalid-feedback">Email field is empty</div>
              </div>
              <div className="col-md-12">
                <input type="date" className="form-control mt-3" placeholder="Date of birth" name="age" />
                <div className="invalid-feedback">Date field is empty</div>
              </div>
              <div className="form-group">
                <select className="form-select mt-3" name="name" >
                  <option selected disabled value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="col-md-12">
                <textarea className="form-control mt-3" placeholder="Biography" name="bio"></textarea>
              </div>
              
            <div className="">
              <button type="submit" id="submit" className="btn btn-primary mt-3 mx-3" >Add Person</button>
              <button type="button" className="btn btn-primary mt-3">Switch</button>
            </div>
          </form>
        );
}
    
    
  
