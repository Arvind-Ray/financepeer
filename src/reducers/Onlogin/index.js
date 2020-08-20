import actionTypes from '../../action-types';

const initialState = {
  data: {},
  result: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ON_LOGIN:
      const payload = action.payload;
      const {data , result} = payload;
      return {
        ...state,
        data,
        result,
       
      }
  }
  return state;
}