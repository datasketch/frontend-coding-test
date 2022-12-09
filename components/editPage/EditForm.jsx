"use client";
import {useState,useEffect} from "react";

export const addOrUpdateProfile = (id, body, method, url) => {
  return fetch(url, {
    method: method,
    mode: "cors",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};


import { Formik, Form, Field } from "formik";

export default function FormPage({ id, profileValues, post }) {
  const [url, setUrl] = useState('http://localhost:3001/people')
  useEffect(() => {
   !post  && setUrl(`http://localhost:3001/people/${id}`)
  }, []);


  async function submitHandler(id, values) {
    const method = post ? 'POST' : 'PATCH'
    await addOrUpdateProfile(id, values, method, url);
  }
  return (
    <Formik
      initialValues={profileValues}
      onSubmit={(values) => {
        submitHandler(id, values);
      }}
    >
      {({ handleChange }) => (
        <Form>
          <Field name="fullName" required />
          <Field name="age" type="number" required />
          <Field name="occupation" required/>
          <Field name="nickname" required/>
          <Field name="gender" required/>
          <Field name="picture" required/>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
