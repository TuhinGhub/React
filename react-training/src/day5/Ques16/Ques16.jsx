import React from 'react';
import withDataFetching from './withDataFetching';

const Ques16 = ({data}) => {
  return (
    <>
      <h1>Data from Public API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>

  )
}

export default withDataFetching(Ques16);