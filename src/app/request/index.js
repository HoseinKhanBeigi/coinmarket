import axios from 'axios';

export const createAsyncAction = (url) => {
  return async (dispatch, values) => {
    return new Promise(async (resolve, reject) => {
      dispatch({ type: 'PENDING' });
      try {
        const config = {
          params: {
            ...values,
          },
        };
        const response = await axios.get(url, config);
        const data = await response.data;
        dispatch({ type: 'SUCCESS', payload: data });
        resolve(data);
        // return data;
      } catch (err) {
        reject(err);
        dispatch({ type: 'FAIL', err });
      }
    });
  };
};
