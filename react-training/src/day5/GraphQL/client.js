import {
    ApolloClient,
    InMemoryCache,
    gql,
  } from "@apollo/client";
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/graphql",
    cache: new InMemoryCache(),
  });
  // const client = ...
  
  // client
  //   .query({
  //     query: gql`
  //       query GetLocations {
  //         locations {
  //           id
  //           name
  //           description
  //         }
  //       }
  //     `,
  //   })
  //   .then((result) => console.log(result));
    export default client;
  