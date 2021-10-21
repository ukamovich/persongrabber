import React from 'react';
import { AddPersonPage } from './AddPersonPage';
import { Field } from "./InputFields";
 
export const AddPersonForm: React.FunctionComponent = () => {
    return (
        <AddPersonPage render={() => (
                <React.Fragment>
                    <div className="alert alert-info" role="alert">
                        Enter the information below and we'll get back to you as soon as we
                        can.
                    </div>
                    <h3>Add a new person <span className="label label-default"></span></h3>
                    <Field id="name" label="First Name"/>
                    <Field id="name" label="Last Name"/>
                    <Field id="email" label="Email"/>

                </React.Fragment>
            )}
        ></AddPersonPage>
 
    );
};

