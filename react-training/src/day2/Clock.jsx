import React, { useState, useEffect } from "react";
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };
    setInterval(updateTime, 1000);
  }, []);

  return(
    <div>
        <h2> Clock</h2>
        <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  )
};
export default Clock;