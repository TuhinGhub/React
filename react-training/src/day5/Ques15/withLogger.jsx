import React, { useState, useEffect } from "react";

const withLogger = (WrappedComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    useEffect(() => {
      console.log("component Mount");

      return () => {
        console.log("Component Unmount");
      };
    }, [count]);

    useEffect(() => {
      console.log("component Updated");
    });

    return <WrappedComponent increment={increment} count={count} />;
  };

  return NewComponent;
};

 export default withLogger;
