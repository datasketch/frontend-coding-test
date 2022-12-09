//import react hooks
import { useState } from "react";

//import next functions
import { useRouter } from "next/router";

//import mui components
import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";

//import utils
import dayjs from "dayjs";

//import components
import { Accordion, FormTask } from "../../components";

//import hooks
import { useForm, useFetchAndLoad } from "../../hooks";

//import services
import { createTask } from "../../services/Tasks";

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3001/people`);
  const people = await res.json();

  return {
    props: { people },
  };
}

const CreateTask = ({ people }) => {
  const [accordion, setAccordion] = useState(false);
  const [dateValue, setDateValue] = useState(dayjs());
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { callEndpoint, loading } = useFetchAndLoad();
  const router = useRouter();
  const { FormData, onChange, handleSuccess } = useForm({
    title: "",
    description: "",
    personId: "",
  });

  const { personId } = FormData;

  const formatDate = (date) => new Date(date).toISOString().split("T")[0];

  const handleSubmit = async (event) => {
    event.preventDefault();

    //see if there is any field not filled and throw an error
    if (Object.values(FormData).includes("")) {
      setError(true);
      return;
    }

    try {
      await callEndpoint(
        createTask({
          ...FormData,
          personId: parseFloat(personId),
          endDate: accordion ? formatDate(dateValue) : null,
          completed: false,
          startDate: formatDate(new Date()),
        })
      );

      setError(false);
      handleSuccess(setSuccess);
      router.push(`/`);
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
            create
            people={people}
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
            <button className="button cancel" onClick={() => router.push(`/`)}>
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
export default CreateTask;
