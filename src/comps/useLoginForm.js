// this is a sample custom hook which is reusable from other components.
// for now just using it for the login form hence the name.
import { useState } from "react";

const useLoginForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default useLoginForm;
