// store/actions/join.js

import apiRoot from "../../constants/AppConstants";

export const addJoin = (join) => {
  //Because of thunk we can return a function
  return async (dispatch, getState) => {
    try {
      const url = `${apiRoot}/join`;
      const params = {
        method: 'POST',
        body: JSON.stringify(join),
        headers: { 'Content-Type': 'application/json' }
      };
      const resp = await fetch(url, params);
      //console.log(resp)
      if (resp.ok) {
        dispatch({ type: 'CREATE_JOIN_SUCCESS', });
      } else {
        console.log(resp);
        throw Error;
      }
    } catch(err) {
        dispatch({ type: 'CREATE_JOIN_ERROR' }, err);
    } finally {
      return {type: null};
    }

  }
};
