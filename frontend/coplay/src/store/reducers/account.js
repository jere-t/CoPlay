// store/reducers/account.js

export const  initState = {
  activeUser: null,
  isAuthenticated: false,
  loginError: false,
}

const account  = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      nextState = {
          ...state,
          activeUser: action.activeUser,
          loginError: action.loginError,
          isAuthenticated: true,
      }
      //Return nextState but if it is undefined, return state
      //It is for security reason, if something went wrong during the "creation" of the new state, you keep the old one
      return nextState || state;
    case 'LOGIN_ERROR':
      nextState = {
          ...state,
          loginError: action.loginError,
      }
      return nextState || state;
    case 'GET_USER_SUCCESS':
      nextState = {
          ...state,
          activeUser: action.activeUser,
      }
      return nextState || state;
    case 'LOGOUT':
      nextState = {
          ...state,
          activeUser: null,
          isAuthenticated: false,
      }
      return nextState || state;
    case 'UPDATE_USER_SUCCESS':
      return state;
    case 'UPDATE_USER_ERROR':
      return state;
    default:
      return state
  }
}

export default account;
