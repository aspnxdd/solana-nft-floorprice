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
    const date = new Date();
    setTime(date.toLocaleString());
  });
  React.useEffect(() => {
    const handle = setInterval(currentCallback, 100);
    return () => clearInterval(handle);
  }, []);
  return <div className="current-time">{time}</div>;
};
export default Time;
