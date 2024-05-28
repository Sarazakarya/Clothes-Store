import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import { Fragment } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Erro from "../Error/Erro";
import LoginSchema from "../Schemas/LoginSchema/LoginSchema";
import { useDispatch } from "react-redux";
import { login } from "../../store/Slices/AuthSlice";
import "./Login.css";
import { Button } from "@material-tailwind/react";

export default function Register() {
  const dispatch = useDispatch();
  const [values, setValues] = useState();
  const navigate = useNavigate();

  function handelLogin(values, actions) {
    const newData = { ...values };
    axios
      .post("http://localhost:3000/users", newData)
      .then((response) => {
        const data = response.data;
        setValues(data);
        dispatch(login(data));
        navigate("/");
        actions.resetForm();
      })
      .catch((error) => {
        console.error("There was an error logging in!", error);
      });
  }

  return (
    <Fragment>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handelLogin}
        validationSchema={LoginSchema}
      >
        {({ errors }) => (
          <div className="h-screen flex items-center justify-center">
            <Form className="w-1/3 border-2 border-gray-700 p-10">
              <div className="Inp-group">
                <label htmlFor="email">Email:</label>
                <Field
                  type="text"
                  placeholder="Enter your Email"
                  name="email"
                  id="email"
                />
                <Erro>{<ErrorMessage name="email" />}</Erro>
              </div>

              <div className="Inp-group">
                <label htmlFor="password">Password:</label>
                <Field
                  type="password"
                  placeholder="Enter your Password"
                  name="password"
                  id="password"
                />
                <Erro>{<ErrorMessage name="password" />}</Erro>
              </div>
              <div className="d-flex justify-content-end">
                <Button
                  color="gray"
                  ripple={true}
                  size="lg"
                  type="submit"
                  disabled={Object.keys(errors).length > 0}
                >
                  Login
                </Button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </Fragment>
  );
}
