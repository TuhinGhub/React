import React, { useState, useEffect } from "react";

const withDataFetching = (WrappedComponent) => {
  const NewComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/"
          );
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);
    return <WrappedComponent data={data} />;
  };
  return NewComponent;
};

 export default withDataFetching;
