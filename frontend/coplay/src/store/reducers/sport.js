// store/reducers/sport.js

const initState = {
  activeSportId: 1,
  sports: []
}

const sport  = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case 'GET_SPORTS_SUCCESS':
      nextState = {
          ...state,
          sports: action.sports,
      }
      return nextState || state;
    case 'CHANGE_ACTIVE_SPORT':
      nextState = {
          ...state,
          activeSportId: action.activeSportId,
      }
      return nextState || state;
    default:
      return state;
  }
}

export default sport;
