import { useState } from 'react';

export const useLoginForm = (callback, initialState = {}) => {
  const [loginValues, setLoginValues] = useState(initialState);

  const onLoginChange = (event) => {
    setLoginValues({ ...loginValues, [event.target.name]: event.target.value });
  };

  const onLoginSubmit = (event) => {
    console.log(loginValues)
    event.preventDefault();
    callback();
  };

  return {
    onLoginChange,
    onLoginSubmit,
    loginValues
  };
};

export const useRegisterForm = (callback, initialState = {}) => {
    const [registerValues, setregisterValues] = useState(initialState);
  
    const onRegisterChange = (event) => {
      setregisterValues({ ...registerValues, [event.target.name]: event.target.value });
    };
  
    const onRegisterSubmit = (event) => {
      event.preventDefault();
      callback();
    };
  
    return {
      onRegisterChange,
      onRegisterSubmit,
      registerValues
    };
  };