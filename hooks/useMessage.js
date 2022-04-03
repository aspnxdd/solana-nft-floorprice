import { useState } from "react";

export const useMessage = () => {
  const [message, setMessage] = useState("");

  function toggle() {
    if (message == "") {
      setMessage("Copied!");
      setTimeout(() => {
        setMessage("");
      }, 1000);
    }
  }

  return [message, toggle];
};
