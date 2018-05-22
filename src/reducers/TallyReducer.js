import Types from '../actions/TallyActions';

export default (state = { tally: 0 }, action) => {
  switch (action.type) {
    // Increment action has been called
    case Types.INCREMENT_TALLY:
      state = { ...state, tally: state.tally + 1 }
      break;
    // Set tally action has been called
    case Types.SET_TALLY:
      state = { ...state, tally: action.payload }
      break;
    // Default is only here to stop the compiler warning
    default:
      break;
  }
  
  return state;
}
