import React, { Component } from 'react'
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik'
import './createAnnonce.css'

class CreateAnnonce extends Component{
    handleSubmit = (values, { 
        props = this.props, 
        setSubmitting 
      }) => {
         
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        return;
      }
    render(){
        return(
        <div className="formt">
            <Formik
                initialValues={{
                    first_name: '',
                    email: '',
                    gender: ''
                }}
                validate={(values) => {
                    let errors = {};
                    if(!values.email)
                        errors.email = "Email Address Required"; 
                        //check if my values have errors
                        return errors;
                }}
                onSubmit={this.handleSubmit}
                    render={formProps => {
                        return(
                            <Form >
                            <Field
                                type="text" 
                                name="first_name" 
                                placeholder="First Name" 
                            /> 
                            <ErrorMessage name="first_name" />
                                <br/>
                            <Field 
                                type="text" 
                                name="email" 
                                placeholder="Email address" 
                            /> 
                            <ErrorMessage name="email" />
                            <br/>
                            <Field
                                name="gender" 
                                component="select" 
                                placeholder="Your Gender"
                            >   
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Field>
                            <br/>
                            <ErrorMessage name="gender" />

                                <button 
                                    type="submit" 
                                    disabled={formProps.isSubmitting}>
                                        Submit Form
                                </button>
                            </Form>
                             );
                    }}
            />
        </div>
        )
    }
}

export default CreateAnnonce;