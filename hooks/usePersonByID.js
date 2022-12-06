// React
import { useState } from "react";

// Axios
import axios from "axios";

export const usePersonByID = () => {
  // State for users data
  const [docsPerson, setDocsPerson] = useState([]);

  // Loading state
  const [loadingPerson, setLoadingPerson] = useState(true);

  // error state
  const [errorPerson, setErrorPerson] = useState(null);

  // Fetch users data
  const getPersonByID = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/people/${id}`);

      setDocsPerson(data);
      setLoadingPerson(false);
    } catch (error) {
      setErrorPerson(error);
      console.log("error", error);
      setLoadingPerson(false);
    }
  };

  return {
    docsPerson,
    loadingPerson,
    errorPerson,
    setDocsPerson,
    setLoadingPerson,
    getPersonByID,
  };
};
