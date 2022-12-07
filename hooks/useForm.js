import { useEffect, useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formValues, setFormValues] = useState(initialForm);

  const handleOnInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return {
    ...formValues,
    formValues,
    handleOnInputChange,
  };
};
