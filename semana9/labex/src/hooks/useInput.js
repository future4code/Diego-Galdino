import { useState } from "react";

export function useInput() {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
      console.log(event.target.value)
    setInput(event.target.value);
  };

  return [input, handleInput];
}
