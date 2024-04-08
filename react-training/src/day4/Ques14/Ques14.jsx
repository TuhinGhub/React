import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is fequired"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const FormValidation = () => (
  <div>
    <h1>Signup</h1>

    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label> Enter first name</label>
          <Field name="firstName" />
          <ErrorMessage
            name="firstName"
            component="div"
            style={{ color: "red" }}
          />
          <label>Enter Last Name</label>
          <Field name="lastName" />
          <ErrorMessage
            name="lastName"
            component="div"
            style={{ color: "red" }}
          />
          <label>Enter email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default FormValidation;