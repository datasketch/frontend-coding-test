//import mui components
import {
  Alert,
  Avatar,
  Backdrop,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import { useState } from "react";

//components
import { FormProfile } from "../../components/FormProfile";

//import hooks
import { useForm, useFetchAndLoad } from "../../hooks";

//import services
import { createPerson } from "../../services/People";

const CreatePerson = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { callEndpoint, loading } = useFetchAndLoad();
  const router = useRouter();
  const { FormData, onChange, handleSuccess } = useForm({
    picture: "",
    fullName: "",
    occupation: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    description: "",
    city: "",
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
      await callEndpoint(createPerson(FormData));
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
      <h2>Create User</h2>
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
            <button className="cancel" onClick={() => router.push(`/`)}>
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
export default CreatePerson;
