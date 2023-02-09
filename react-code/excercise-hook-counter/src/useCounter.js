import { useState } from "react";

export const useCounter = (num = 0) => {
  const [count, setCount] = useState(num);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };
  const restart = () => {
    setCount(0);
  };

  return { count, increase, decrease, restart };
};
