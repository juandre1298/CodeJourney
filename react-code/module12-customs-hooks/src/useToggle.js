import { useState } from "react";

export const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState((prev) => !prev);
    m;
  }; // you can return an array or an object, depending on if you want to change the variable names in the main page that uses the hook
  return [state, toggle];
};
