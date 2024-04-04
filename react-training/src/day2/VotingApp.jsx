import React, { useReducer } from 'react';

// Initial state for the votes
const initialState = {
  option1: 0,
  option2: 0,
  option3: 0,
};

// Reducer function to manage votes
const reducer = (state, action) => {
  switch (action.type) {
    case 'VOTE':
      return {
        ...state,
        [action.option]: state[action.option] + 1,
      };
    default:
      return state;
  }
};

// Voting component
const VotingApp = () => {
  const [votes, dispatch] = useReducer(reducer, initialState);

  const handleVote = (option) => {
    dispatch({ type: 'VOTE', option });
  };

  return (
    <div>
      <h2>Vote for Your Preferred Option</h2>
      <div>
        <button onClick={() => handleVote('option1')}>Option 1</button>
        <span> - Votes: {votes.option1}</span>
      </div>
      <div>
        <button onClick={() => handleVote('option2')}>Option 2</button>
        <span> - Votes: {votes.option2}</span>
      </div>
      <div>
        <button onClick={() => handleVote('option3')}>Option 3</button>
        <span> - Votes: {votes.option3}</span>
      </div>
    </div>
  );
};

export default VotingApp;
