// React
import { useState } from "react";

// Axios
import axios from "axios";

export const useTasksByID = () => {
  // State for users data
  const [docsTasks, setDocsTasks] = useState([]);

  // Loading state
  const [loadingTasks, setLoadingTasks] = useState(true);

  // error state
  const [errorTasks, setErrorTasks] = useState(null);

  // fetch tasks data by person id

  const getTasksByID = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/tasks`);

      const personID = parseInt(id);

      const tasks = data.filter((task) => task.personId === personID);

      setDocsTasks(tasks);
      setLoadingTasks(false);
    } catch (error) {
      setErrorTasks(error);
      console.log("error", error);
      setLoadingTasks(false);
    }
  };

  return {
    docsTasks,
    loadingTasks,
    errorTasks,
    setDocsTasks,
    setLoadingTasks,
    getTasksByID,
  };
};
