// store/reducers/playground.js

const initState = {
  courts: [],
}

const playground = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case 'GET_COURTS_SUCCESS':
      nextState = {
          ...state,
          courts: action.courts,
      }
      return nextState || state;
    default:
      return state
  }
}

export default playground;
