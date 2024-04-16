import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import React, { useState } from "react";



const BigCode=()=> {
  const [pageRange, setPageRange] = useState({
    currentPage: 1,
    itemsPerPage: 10,
  });

  const GET_DATA = gql`
    query GetData {
      countries {
        name
        phone
        currency
      }  
    }
  `;

  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>Error: {error.message}</p>; 
  console.log(data,"4444444444444444");
  console.log(error,"88888");

  // Calculate pagination
  const startIndex = (pageRange.currentPage - 1) * pageRange.itemsPerPage;
  const endIndex = startIndex + pageRange.itemsPerPage;
  const paginatedData = data.countries.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.countries.length / pageRange.itemsPerPage);

  return (
    <div>
      <h1>Question - 9</h1>
      <ul className="country-List">
        {paginatedData.map((country, index) => ( 
          <li className="country-item" key={index}>Country Name: {country.name} Phone Number: {country.phone} Currency: {country.currency}</li>
        ))}
      </ul>
      
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center"
      }}>
        {pageRange.currentPage > 1 && (
          <button
            style={{
              padding: "10px",
              margin: "10px",
              borderRadius: "10px",
            }}
            onClick={() => setPageRange({ ...pageRange, currentPage: pageRange.currentPage - 1 })}
          >
            Prev Page
          </button>
        )}
        <p>
          Page {pageRange.currentPage} of {totalPages}
        </p>
        {pageRange.currentPage < totalPages && (
          <button
            style={{
              padding: "10px",
              margin: "10px",
              borderRadius: "10px",
            }}
            onClick={() => setPageRange({ ...pageRange, currentPage: pageRange.currentPage + 1 })}
          >
            Next Page
          </button>
        )}
      </div>
    </div>
  );
}

export default BigCode;