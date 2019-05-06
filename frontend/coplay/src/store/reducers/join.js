// store/reducers/join.js

const initState = {

}

const join = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case 'CREATE_JOIN_SUCCESS':
      return state;
    case 'CREATE_JOIN_ERROR':
      console.log('create join error');
      return state;
    default:
      return state
  }

}

export default join;
