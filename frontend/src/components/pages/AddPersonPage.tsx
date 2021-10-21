import React, { FormEventHandler } from "react";
import { useState } from "react";

interface IFormProps {
  
  render: () => React.ReactNode;
}

export interface IValues {
  [key: string]: any;
}

export interface IErrors {
  [key: string]: any;
}

export interface IFormState {
  values: IValues;
  errors: IErrors;
  submitSuccess?: boolean;
}

export class AddPersonPage extends  React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);

    const errors: IErrors = {};
    const values: IValues = {};
    this.state = {
      errors,
      values,
    };
  }

  private haveErrors(errors: IErrors) {
    let haveError: boolean = false;
    Object.keys(errors).map((key: string) => {
      if (errors[key].length > 0) {
        haveError = true;
      }
      
    });
    return haveError;
  }



  private handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (this.validateForm()) {
      const submitSuccess: boolean = await this.submitForm();
      this.setState({ submitSuccess });
    }
  };

  private validateForm(): boolean {
    return true;
  }

  private async submitForm(): Promise<boolean> {
    return true;
  }

  public render() {
    const { submitSuccess, errors } = this.state;
    return (
      <form className="requires-validation" onSubmit={this.handleSubmit} noValidate={true} >

        <div className="container">

          {this.props.render()}

            <div className="form-group">
              <button type="submit" disabled={this.haveErrors(errors)} id="submit" className="btn btn-primary mt-3 mx-3" >Add Person</button>
              <button type="button" className="btn btn-primary mt-3">Switch</button>
            </div>
        
          {submitSuccess && (
              <div className="alert alert-info" role="alert">
                The form was successfully submitted!
              </div>
          )}
          {submitSuccess === false &&
              !this.haveErrors(errors) && (
                <div className="alert alert-danger" role="alert">
                  Sorry, an unexpected error has occurred
                </div>
              )}
          {submitSuccess === false &&
              this.haveErrors(errors) && (
                <div className="alert alert-danger" role="alert">
                  Sorry, the form is invalid. Please review, adjust and try again
                </div>
              )}
        </div>
      </form>
    )
  }
}
    
  
  // Form //onSubmit={handleSubmit}
//første input // onChange={event => setName(event.target.value)}
//andre input // onChange={event => setAge(parseInt(event.target.value))}
//tredje input  // onChange={event => setGender(event.target.value)} id="exampleFormControlSelect1"
//første button // {isGet ? "Get people" : "Add person"}
//andre button // onClick={switchMode} {"Switch"}

// export function AddPersonPage() {
//   const [term, setTerm] = useState("");
//   let submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     alert(term);
//   }
//     return (
  
//       <form className="requires-validation" onSubmit={submitHandler} noValidate >
//         <h3>Add a new person <span className="label label-default"></span></h3>
//           <div className="col-md-12">
//             <input type="text" value={first_name} className="form-control mt-3" required placeholder="First Name" name="name" />
//             <div className="invalid-feedback">Name field is empty</div>
//           </div>
//           <div className="col-md-12">
//             <input type="text" className="form-control mt-3" required placeholder="Last Name" name="name" />
//             <div className="invalid-feedback">Name field is empty</div>
//           </div>
//           <div className="col-md-12">
//             <input type="text" className="form-control mt-3" required placeholder="Email adress" name="email" />
//             <div className="invalid-feedback">Email field is empty</div>
//           </div>
//           <div className="col-md-12">
//             <input type="date" className="form-control mt-3" placeholder="Date of birth" name="age" />
//             <div className="invalid-feedback">Date field is empty</div>
//           </div>
//           <div className="form-group">
//             <select className="form-select mt-3" name="name" >
//               <option selected disabled value="">Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//           </div>
//           <div className="col-md-12">
//             <textarea className="form-control mt-3" placeholder="Biography" name="bio"></textarea>
//           </div>
          
//         <div className="">
//           <button type="submit" id="submit" className="btn btn-primary mt-3 mx-3" >Add Person</button>
//           <button type="button" className="btn btn-primary mt-3">Switch</button>
//         </div>
//       </form>
//     );
//   }