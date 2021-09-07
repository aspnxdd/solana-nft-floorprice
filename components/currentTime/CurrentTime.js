import React from "react";

const useCurrentCallback = (callback) => {
  const reference = React.useRef();
  reference.current = callback;
  return (...args) => {
    return reference.current?.(...args);
  };
};

const Time = () => {
  const [time, setTime] = React.useState(0);
  const currentCallback = useCurrentCallback(() => {
    const date2 = new Date();
    const date = new Date();
    setTime(date.toLocaleString("en-GB", {
      hour12: false,
      timeStyle: "short",
      dateStyle: "short",
    }));
  });
  React.useEffect(() => {
    const handle = setInterval(currentCallback, 100);
    return () => clearInterval(handle);
  }, []);
  return <div className="current-time">Current time: {time}</div>;
};
export default Time;
