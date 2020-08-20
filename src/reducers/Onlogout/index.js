import actionTypes from '../../action-types';

const initialState = {
  message: '',
  result: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ON_LOGOUT:
      console.log("action in reducer", action.payload);
      const payload = action.payload;
      const result = payload.result;
      if (result === 0) {
        return {
          ...state,
          result: result,
          message: payload.errors[0],
        }
      }
      return {
        ...state,
        result: result,
        message: payload.message,
      }
  }
  return state;
}