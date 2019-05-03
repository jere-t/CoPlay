// store/reducers/account.js

export const  initState = {
  activeUser: null,
}

const account  = (state = initState, action) => {
  let nextState;
  console.log("DFRGFHGFDASHTGRFEADWHTDZJHGRSFE");
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      nextState = {
          ...state,
          activeUser: action.activeUser,
      }
      //Return nextState but if it is undefined, return state
      //It is for security reason, if something went wrong during the "creation" of the new state, you keep the old one
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
