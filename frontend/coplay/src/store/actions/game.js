// store/actions/game.js

import apiRoot from "../../constants/AppConstants";

export const createGame = (game) => {
  //Because of thunk we can return a function
  return async (dispatch, getState) => {
    const url = `${apiRoot}/game`;
    const params = {
      method: 'POST',
      body: JSON.stringify(game),
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(url , params)
      .then(response => {
        dispatch({ type: 'CREATE_GAME_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_GAME_ERROR' }, err);
      });

  }
}

export const fetchGames = (idClub, idSport, date) => {
  return async (dispatch, getState) => {
    try {
      const url = `${apiRoot}/game/advance/${date}&${idClub}&${idSport}`;
      const params = {
        method: 'GET',
      };

      const resp = await fetch(url, params);
      //console.log(resp)
      if (resp.ok) {
        //to json
        const data = await resp.json();
        dispatch({ type: 'GET_GAMES_SUCCESS', activeGames: data });
      } else {
        console.log(resp);
        throw Error;
      }
    } catch (e) {
      console.log(e)
    } finally {
      return {type: null};
    }
  }
};
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
