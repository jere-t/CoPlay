// store/actions/game.js

export const createGame = (game) => {
  //Because of thunk we can return a function
  return (dispatch, getState) => {
    //make async call to API
    dispatch({ type: 'CREATE_GAME', game })
  }


}
