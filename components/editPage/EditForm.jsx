"use client";
export const updateProfile = (id, body) => {
  return fetch(`http://localhost:3001/people/${id}`, {
    method: "PATCH",
    mode: "cors",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};

import { Formik, Form, Field } from "formik";
import Link from "next/link";

export default function FormPage({ id, profileValues }) {
  async function submitHandler(id, values) {
    await updateProfile(id, values);
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
          <Field name="fullName" />
          <Field name="age" type="number" />
          <Field name="occupation" />
          <Field name="nickname" />
          <Field name="gender" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
