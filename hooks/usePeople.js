// React
import { useEffect, useState } from "react";

// Axios
import axios from "axios";

export const usePeople = () => {
  // State for users data
  const [docsPeople, setDocsPeople] = useState([]);

  // Loading state
  const [loadingPeople, setLoadingPeople] = useState(true);

  // error state
  const [errorPeople, setErrorPeople] = useState(null);

  // Filter state
  const [filterPeople, setFilterPeople] = useState("Age");

  // Fetch users data
  const getPeople = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/people");

      const docs = data.map(
        ({ id, fullName, age, occupation, nickname, gender, picture }) => ({
          id,
          name: fullName,
          age,
          occupation,
          nickname,
          gender,
          img: picture,
        })
      );

      // docs sorted by age in ascending order
      const docsSorted = docs.sort((a, b) => a.age - b.age);

      setDocsPeople(docsSorted);

      // setDocsPeople(docs);
      setLoadingPeople(false);
    } catch (error) {
      setErrorPeople(error);
      setLoadingPeople(false);
    }
  };

  const peopleOrderByAge = () => {
    const docsSorted = [...docsPeople].sort((a, b) => a.age - b.age);
    setDocsPeople(docsSorted);
  };

  const peopleOrderByName = () => {
    const docsSorted = [...docsPeople].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    setDocsPeople(docsSorted);
  };

  useEffect(() => {
    getPeople();
  }, []);

  useEffect(() => {
    switch (filterPeople) {
      case "Name":
        peopleOrderByName();
        break;
      case "Age":
        peopleOrderByAge();
        break;
      default:
        peopleOrderByAge();
        break;
    }
  }, [filterPeople]);

  return {
    docsPeople,
    loadingPeople,
    errorPeople,
    filterPeople,
    setFilterPeople,
    setDocsPeople,
    setLoadingPeople,
    getPeople,
  };
};
