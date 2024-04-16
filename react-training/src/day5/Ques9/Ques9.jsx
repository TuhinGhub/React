import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import BigCode from "./BigCode";

const Ques9 = () => {
  const client2 = new ApolloClient({
    uri: "https://countries.trevorblades.com/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <>
      {/* <ApolloProvider client2={client2}> */}
      <BigCode />
      {/* </ApolloProvider> */}
    </>
  );
};
   export default Ques9;
 