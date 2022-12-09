import axios from "axios";
import { loadAbort } from "../utils";

const URL = "http://localhost:3001/";

export const completedTask = (id, state) => {
  const controller = loadAbort();
  return {
    call: axios.patch(
      `${URL}tasks/${id}`,
      { completed: state },
      { signal: controller.signal }
    ),
    controller,
  };
};

export const editTask = (id, data) => {
  const controller = loadAbort();
  return {
    call: axios.patch(
      `${URL}tasks/${id}`,
      { ...data },
      { signal: controller.signal }
    ),
    controller,
  };
};

export const createTask = (data) => {
  const controller = loadAbort();
  return {
    call: axios.post(
      `${URL}tasks/`,
      { ...data },
      { signal: controller.signal }
    ),
    controller,
  };
};
