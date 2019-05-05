// store/reducers/game.js

const initState = {
  games: [],
}

const game = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case 'GET_GAMES_SUCCESS':
      nextState = {
          ...state,
          games: action.games,
      }
      //!!! Important thing to do. Return nextState but if it is undefined, return state
      //It is for security reason, if something went wrong during the "creation" of the new state, you keep the old one
      return nextState || state;
    case 'CREATE_GAME_SUCCESS':
      console.log('create game success');
      return state;
    case 'CREATE_GAME_ERROR':
      console.log('create game error');
      return state;
    default:
      return state
  }

}

export default game;
