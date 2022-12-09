// import react hooks
import { useState } from "react";

//import next functions
import { useRouter } from "next/router";

//import mui components
import {
  Alert,
  Avatar,
  Backdrop,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import { Stack } from "@mui/system";

//components
import { FormProfile } from "../../../components/FormProfile";

//import hooks
import { useForm, useFetchAndLoad } from "../../../hooks";

//import services
import { editPerson } from "../../../services/People";

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3001/people/${id}`);
  const person = await res.json();

  return {
    props: { person, id },
  };
}

const EditUser = ({ person, id }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { callEndpoint, loading } = useFetchAndLoad();
  const router = useRouter();
  const { FormData, onChange, handleSuccess } = useForm({
    picture: person?.picture,
    fullName: person?.fullName,
    occupation: person?.occupation,
    age: person?.age,
    gender: person?.gender,
    email: person?.email,
    phone: person?.phone,
    description: person?.description,
    city: person?.city,
  });

  const { picture, fullName } = FormData;

  const handleSubmit = async (event) => {
    event.preventDefault();

    //see if there is any field not filled and throw an error
    if (Object.values(FormData).includes("")) {
      setError(true);
      return;
    }

    try {
      await callEndpoint(editPerson(id, FormData));
      setError(false);
      handleSuccess(setSuccess);
      router.push(`/profile/${id}`);
    } catch (error) {
      console.log({ error });
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <div className="edit-user">
        <section>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            style={{ marginBottom: "20px" }}
          >
            <Avatar alt={""} src={picture} sx={{ width: 150, height: 150 }} />
          </Stack>
          {fullName}
        </section>

        <section>
          <FormProfile
            handleSubmit={handleSubmit}
            onChange={onChange}
            fields={FormData}
          />
          {error && (
            <Alert variant="outlined" severity="error">
              Error - You must fill in all the fields
            </Alert>
          )}
          <div className="div-buttons">
            <button
              className="cancel"
              onClick={() => router.push(`/profile/${id}`)}
            >
              Cancel
            </button>
            <button onClick={handleSubmit}>Save changes</button>
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
export default EditUser;
