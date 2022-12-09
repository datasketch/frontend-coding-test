import { useState } from "react";

export const useForm = (initialState) => {
  const [FormData, setFormData] = useState(initialState);

  //update input values
  const onChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  //controls the status of the feedback when the request is successful
  const handleSuccess = (setState) => {
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 6000);
  };



  return {
    onChange,
    FormData,
    handleSuccess,
  };
};
