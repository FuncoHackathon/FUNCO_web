const initialState = {
  isLog: false,
  userName: null,
  indexx: null,
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const INDEX = "INDEX";

const rootreducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLog: true,
        userName: action.name,
      };
    case LOGOUT: {
      return {
        ...state,
        isLog: false,
        userName: null,
      };
    }
    case INDEX: {
      return {
        ...state,
        indexx: action.indexx,
      };
    }
    default:
      return state;
  }
};

export default rootreducer;
