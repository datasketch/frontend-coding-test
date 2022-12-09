//import react hooks
import { useState } from "react";

//import next functions
import { useRouter } from "next/router";

//import mui components
import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";

//import libraries
import dayjs from "dayjs";

//import components
import { Accordion, FormTask } from "../../../components";

//import hooks
import { useForm, useFetchAndLoad } from "../../../hooks";

//import services
import { editTask } from "../../../services/Tasks";

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`http://localhost:3001/tasks/${id}`);
  const task = await res.json();

  return {
    props: { task, id },
  };
}

const EditTask = ({ task, id }) => {
  const [accordion, setAccordion] = useState(task.endDate !== null);
  const [dateValue, setDateValue] = useState(
    task.endDate === null ? dayjs() : task.endDate
  );
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { callEndpoint, loading } = useFetchAndLoad();
  const router = useRouter();
  const { FormData, onChange, handleSuccess } = useForm({
    title: task?.title,
    description: task?.description,
  });

  const { title, description } = FormData;

  const formatDate = new Date(dateValue).toISOString().split("T")[0];

  const handleSubmit = async (event) => {
    event.preventDefault();

    //see if there is any field not filled and throw an error
    if (Object.values(FormData).includes("")) {
      setError(true);
      return;
    }

    try {
      await callEndpoint(
        editTask(id, {
          title,
          description,
          endDate: accordion ? formatDate : null,
        })
      );

      setError(false);
      handleSuccess(setSuccess);
      router.push(`/profile/${task.personId}`);
    } catch (error) {
      console.log({ error });
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <div className="edit-task">
        <section>
          <FormTask
            onChange={onChange}
            handleSubmit={handleSubmit}
            fields={FormData}
          />

          <Accordion
            dateValue={dateValue}
            setDateValue={setDateValue}
            setAccordion={setAccordion}
            accordion={accordion}
          />
          {error && (
            <Alert variant="outlined" severity="error">
              Error - You must fill in all the fields
            </Alert>
          )}
          <div className="div-buttons">
            <button
              className="button cancel"
              onClick={() => router.push(`/profile/${task.personId}`)}
            >
              Cancel
            </button>
            <button className="button" onClick={handleSubmit}>
              Save changes
            </button>
          </div>

          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={success}
            key={"top center"}
            autoHideDuration={10}
          >
            <Alert severity="success" sx={{ width: "100%" }}>
              successfully saved
            </Alert>
          </Snackbar>
        </section>
      </div>
    </div>
  );
};
export default EditTask;
