

export function AddCarPage() {
    return (
  
      <form className="requires-validation" noValidate >
        <h3>Add a new car <span className="label label-default"></span></h3>
          <div className="col-md-12">
            <input type="text" className="form-control mt-3" required placeholder="Name of owner" name="name" />
            <div className="invalid-feedback">Name field is empty</div>
          </div>
          <div className="col-md-12">
            <input type="text" className="form-control mt-3" required placeholder="Reg number" name="name" />
            <div className="invalid-feedback">Reg number field is empty</div>
          </div>
          <div className="col-md-12">
            <input type="number" className="form-control mt-3" placeholder="Model year" name="age" />
            <div className="invalid-feedback">Date field is empty</div>
          </div>
          <div className="form-group">
            <select className="form-select mt-3" name="name" >
              <option selected disabled value="">Car manufactorer</option>
              <option value="male">Toyota</option>
              <option value="female">Opel</option>
              <option value="female">Volvo</option>
              <option value="female">Saab</option>
              <option value="female">Ferrari</option>
              <option value="female">Koeningsegg</option>
              <option value="female">Nissan</option>
              <option value="female">Ford</option>
              <option value="female">Volkswagen</option>
            </select>
          </div>
          <div className="col-md-12">
            <input type="text" className="form-control mt-3" placeholder="Car model" name="age" />
            <div className="invalid-feedback">Car model field is empty</div>
          </div>
          <div className="col-md-12">
            <textarea className="form-control mt-3" placeholder="Specifications" name="specs"></textarea>
          </div>
          
        <div className="">
          <button type="submit" id="submit" className="btn btn-primary mt-3 mx-3" >Add Person</button>
          <button type="button" className="btn btn-primary mt-3">Switch</button>
        </div>
      </form>
    );
  }