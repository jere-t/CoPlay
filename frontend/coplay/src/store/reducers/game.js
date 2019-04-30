// store/reducers/game.js

const initState = {

}

const game = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case 'CREATE_GAME':
      console.log('Created game', action.game);
      nextState = null;
      
      //!!! Important thing to do. Return nextState but if it is undefined, return state
      //It is for security reason, if something went wrong during the "creation" of the new state, you keep the old one
      return nextState || state;

    default:
      return state
  }

}

export default game;