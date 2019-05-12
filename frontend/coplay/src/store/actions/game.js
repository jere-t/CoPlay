// store/actions/game.js

import apiRoot from "../../constants/AppConstants";

export const createGame = (game) => {
  //Because of thunk we can return a function
  return async (dispatch, getState) => {
    try {
      const url = `${apiRoot}/game`;
      const params = {
        method: 'POST',
        body: JSON.stringify(game),
        headers: { 'Content-Type': 'application/json' }
      };
      const resp = await fetch(url, params);
      //console.log(resp)
      if (resp.ok) {
        //to json
        const data = await resp.json();
        dispatch({ type: 'CREATE_GAME_SUCCESS', idLastGame: data});
      } else {
        console.log(resp);
        throw Error;
      }
    } catch(err) {
        dispatch({ type: 'CREATE_GAME_ERROR' }, err);
    } finally {
      return {type: null};
    }

  }
};

export const fetchGames = (idClub, date) => {
  return async (dispatch, getState) => {
    try {
      const url = `${apiRoot}/game/advance/${date}&${idClub}`;
      const params = {
        method: 'GET',
      };

      const resp = await fetch(url, params);
      //console.log(resp)
      if (resp.ok) {
        //to json
        const data = await resp.json();
        dispatch({ type: 'GET_GAMES_SUCCESS', games: data });
      } else {
        console.log(resp);
                dispatch({ type: 'GET_GAMES_ERROR', });
      }
    } catch (e) {
      console.log(e)
      dispatch({ type: 'GET_GAMES_ERROR', });
    }  finally {
      return {type: null};
    }
  }
};

export const fetchGamesConnect = (idClub, idSport, date) => {
  return async (dispatch, getState) => {
    try {
      const url = `${apiRoot}/game/advanceconnect/${date}&${idClub}&${idSport}`;
      const params = {
        method: 'GET',
      };

      const resp = await fetch(url, params);
      //console.log(resp)
      if (resp.ok) {
        //to json
        const data = await resp.json();
        dispatch({ type: 'GET_CONNECT_GAMES_SUCCESS', connectGames: data });
      } else {
        console.log(resp);
        dispatch({ type: 'GET_CONNECT_GAMES_ERROR', });
      }
    } catch (e) {
      console.log(e)
      dispatch({ type: 'GET_CONNECT_GAMES_ERROR', });
    }
  }
};
