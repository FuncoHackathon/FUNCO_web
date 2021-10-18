const initialState = {
  isLog: false,
  userName: null,
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const rootreducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLog: true,
        userName: action.name,
      };
    case LOGOUT:
      return {
        ...state,
        isLog: false,
        userName: null,
      };
    default:
      return state;
  }
};

export default rootreducer;
