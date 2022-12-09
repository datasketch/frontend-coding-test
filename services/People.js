import axios from "axios";
import { loadAbort } from "../utils";

const URL = "http://localhost:3001/";

export const editPerson = (id, data) => {
  const controller = loadAbort();
  return {
    call: axios.put(
      `${URL}people/${id}`,
      { ...data },
      { signal: controller.signal }
    ),
    controller,
  };
};

export const createPerson = (data) => {
  const controller = loadAbort();
  return {
    call: axios.post(
      `${URL}people/`,
      { ...data },
      { signal: controller.signal }
    ),
    controller,
  };
};
