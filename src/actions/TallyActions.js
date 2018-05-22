const types = {
  INCREMENT_TALLY: 'INCREMENT_TALLY',
  SET_TALLY: 'SET_TALLY'
};

// Define increment tally action
export function incrementTally() {
  return {
    type: types.INCREMENT_TALLY,
  };
}

// Define set tally action
export function setTally(newTally) {
  return {
    type: types.SET_TALLY,
    payload: newTally
  };
}

export default types;
