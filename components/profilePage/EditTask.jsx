"use client";

import { Formik, Form, Field } from "formik";
import Link from "next/link";

const updateTask = (id, body) => {
  return fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PATCH",
    mode: "cors",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};



export default function EditTaskForm({ id, taskValues }) {
  async function submitHandler(id, values) {
    await updateTask(id, values);
  }
  return (
    <Formik
      initialValues={taskValues}
      onSubmit={(values) => {
        submitHandler(id, values);
      }}
    >
      {({ handleChange }) => (
        <Form>
          <Field name="title" />
          <Field name="description" as="textarea" />
          <Field name="completed" type="radio" />
          <Field name="startDate" type="date" />
          <Field name="endDate" type="date" />
          <button type="submit">Submit</button>
          <Link href={`profile/${id}`}>volver</Link>
        </Form>
      )}
    </Formik>
  );
}
