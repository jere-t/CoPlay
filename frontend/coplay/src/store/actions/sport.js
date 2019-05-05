// store/actions/sport.js

import apiRoot from "../../constants/AppConstants";


export const fetchSport = (idClub) => {
  return async (dispatch, getState) => {
    try {
      const url = `${apiRoot}/sport/club/${idClub}`;
      const method = 'GET';

      const resp = await fetch(url, { method });
      //console.log(resp)
      if (resp.ok) {
        //to json
        const data = await resp.json();
        dispatch({ type: 'GET_SPORTS_SUCCESS', sports: data });
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
