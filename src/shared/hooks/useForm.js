import { useState } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    setState(prevState => {
      const { name, value, checked, type } = target;
      const newValue = type === 'checkbox' ? checked : value;

      return {
        ...prevState,
        [name]: newValue,
      };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...state });
  };

  return { state, setState, handleChange, handleSubmit };
};

export default useForm;
