// store/actions/game.js

import apiRoot from "../../constants/AppConstants";

export const createGame = (game) => {
  //Because of thunk we can return a function
  return (dispatch, getState) => {
    const url = `${apiRoot}/game`;
    const method = "POST";
    const params = {};

    fetch(url , {
      method: 'POST',
      body: JSON.stringify(game),
      headers: { 'Content-Type': 'application/json' }})
      .then(response => {
        dispatch({ type: 'CREATE_GAME_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_GAME_ERROR' }, err);
      });

  }
}
//dispatch({ type: 'CREATE_GAME', game })
// return (dispatch, getState) => {
//   const url = `${apiRoot}/game`;
//   const method = "POST";
//   const params = {};
//
//   fetch(url , {
//     method: 'POST',
//     body: JSON.stringify(game),
//     headers: { 'Content-Type': 'application/json' }})
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => err);
//
// }
