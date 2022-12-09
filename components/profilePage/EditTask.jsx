"use client";

import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import {fetchPeople} from "../../app/page";
import Link from "next/link";

const addOrUpdateTask = (id ,body, method, url) => {
  return fetch(url, {
    method: method,
    mode: "cors",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};

export default function EditTaskForm({id,taskValues, post }) {
  const [url, setUrl] = useState("http://localhost:3001/tasks");
  const [people, setPeople] = useState([])
  const fetchList = async () => {
    const fetchedList = await fetchPeople()
    setPeople(fetchedList)
  }

  useEffect(() => {
    fetchList()
  }, []);


  useEffect(() => {
    !post && setUrl(`http://localhost:3001/tasks/${id}`);
  }, []);


  async function submitHandler(id, values) {
    const method = post ? "POST" : "PATCH";
    await addOrUpdateTask(id, values, method, url);
  }

  return (
    <Formik
      initialValues={taskValues}
      onSubmit={(values) => {
        submitHandler(id, values);
      }}
    >

          <Form>
            <Field name="title" />
            <Field name="description" as="textarea" />
            <Field name="completed"  type="checkbox" />
            <Field name="startDate" type="date" />
            <Field name="endDate" type="date" />
            <Field name="personId" as='select' >
              {
                people.map((person, index) => <option key={index} value={person.id}>{person.fullName}</option>  )
              }
            </Field>
            <button type="submit">Submit</button>
            <Link href={`profile/${id}`}>volver</Link>
          </Form>

    </Formik>
  );
}
