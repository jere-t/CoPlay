// store/actions/account.js

import apiRoot from "../../constants/AppConstants";


export const getUserById = (id) => {
  return async (dispatch, getState) => {
    try {
      const url = `${apiRoot}/user/${id}`;
      const method = 'GET';

      const resp = await fetch(url, { method });
      //console.log(resp)
      if (resp.ok) {
        //to json
        const data = await resp.json();
        dispatch({ type: 'GET_USER_SUCCESS', activeUser: data });
      } else {
        throw Error;
      }
    } catch (e) {
      console.log(e)
    } finally {
      return {type: null};
    }
  }
};

export const getUserByUsername = (username) => {
  return async (dispatch, getState) => {
    try {
      const url = `${apiRoot}/user/username/${username}`;
      const method = 'GET';

      const resp = await fetch(url, { method });
      //console.log(resp)
      if (resp.ok) {
        //to json
        const data = await resp.json();
        dispatch({ type: 'GET_USER_SUCCESS', activeUser: data });
      } else {
        throw Error;
      }
    } catch (e) {
      console.log(e)
    } finally {
      return {type: null};
    }
  }
};

export const loginCheck = (username, passwordHash, idClub) => {
  let user = {username: username, passwordHash : passwordHash, idClub: idClub}
  return async (dispatch, getState) => {
    try {
      const url = `${apiRoot}/user/login`;
      const params = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
      };

      const resp = await fetch(url, params);
      if (resp.ok) {
        //to json
        const data = await resp.json();
        dispatch({ type: 'LOGIN_SUCCESS', activeUser: data[0].cpUser, loginError: false });
      } else {
        dispatch({ type: 'LOGIN_ERROR', loginError: true });
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

export const updateUser = (user) => {
  return async (dispatch, getState) => {
    const url = `${apiRoot}/user`;
    const params = {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(url , params)
      .then(async response => {
        await dispatch({ type: 'UPDATE_USER_SUCCESS'});
        await dispatch(getUserById(user.idUser));
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: 'UPDATE_USER_ERROR' }, err);
      });
  }
}
