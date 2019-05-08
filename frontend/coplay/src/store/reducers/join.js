// store/reducers/join.js

const initState = {
  isSucceed: true,
}

const join = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case 'CREATE_JOIN_SUCCESS':
    nextState = {
        ...state,
        isSucceed: true,
    }
    return nextState || state;
    case 'CREATE_JOIN_ERROR':
      console.log('create join error');
      nextState = {
          ...state,
          isSucceed: false,
      }
      return nextState || state;
    default:
      return state
  }

}

export default join;
