import React, { useState, useEffect } from "react";
import axios from "axios";

const Ques5 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        axios
          .get("https://jsonplaceholder.typicode.com/todos/")
          .then((response) => {
            setData(response.data); //different from data in usestate
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Public API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ques5;
