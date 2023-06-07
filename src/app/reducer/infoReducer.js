import { useReducer } from 'react';
const initialState = {
  status: 'idle',
  error: null,
  data: [],
};

export const infoReducer = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'PENDING':
        return { ...initialState, status: 'pending' };
      case 'SUCCESS':
        return {
          ...initialState,
          status: 'success',

          data: action.payload,
        };
      case 'FAIL':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return state;
    }
  }, initialState);

  return {
    infoState: state,
    infoDispatch: dispatch,
  };
};
