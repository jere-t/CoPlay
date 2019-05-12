// store/actions/playground.js

import apiRoot from "../../constants/AppConstants";

export const fetchCourt = (idClub, idSport) => {
  return async (dispatch, getState) => {
    try {
      const url = `${apiRoot}/playground/advance/${idClub}&${idSport}`;
      const params = {
        method: 'GET',
      };

      const resp = await fetch(url, params);
      if (resp.ok) {
        //to json
        const data = await resp.json();
        dispatch({ type: 'GET_COURTS_SUCCESS', courts: data });
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
