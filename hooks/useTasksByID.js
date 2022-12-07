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

  // Single task state
  const [docTask, setDocTask] = useState([]);

  const getTasksByID = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/tasks`);

      const personID = parseInt(id);

      const tasks = data.filter((task) => task.personId === personID);

      const tasksSorted = tasks.sort((a, b) => {
        if (a.completed === b.completed) {
          return 0;
        }
        if (a.completed === false) {
          return -1;
        }
        if (a.completed === true) {
          return 1;
        }
      });

      setDocsTasks(tasksSorted);
      setLoadingTasks(false);
    } catch (error) {
      setErrorTasks(error);
      console.log("error", error);
      setLoadingTasks(false);
    }
  };

  // Get task by task ID
  const getTaskByID = async (id) => {
    const taskID = parseInt(id);

    try {
      const { data } = await axios.get(`http://localhost:3001/tasks/${taskID}`);

      console.log(data);
      setDocTask(data);
      setLoadingTasks(false);
    } catch (error) {
      setErrorTasks(error);
      console.log("error", error);
      setLoadingTasks(false);
    }
  };

  // Funtion to mark task as completed or not completed
  const markTask = async (id) => {
    try {
      const taskUpdated = {
        ...docsTasks,
        completed: !docsTasks.completed,
      };

      const dataUpdated = await axios.put(
        `http://localhost:3001/tasks/${id}`,
        taskUpdated
      );

      const tasksUpdated = docsTasks.map((task) =>
        task.id === dataUpdated.id ? dataUpdated : task
      );

      getTasksByID(id);
      setDocsTasks(tasksUpdated);
      setLoadingTasks(false);
    } catch (error) {
      setErrorTasks(error);
      console.log("error", error);
      setLoadingTasks(false);
    }
  };

  return {
    docsTasks,
    markTask,
    loadingTasks,
    errorTasks,
    setDocsTasks,
    setLoadingTasks,
    getTasksByID,
  };
};
