const initialState = {
  isLog: false,
  userName: null,
};

export const LOGIN = "LOGIN";

const rootreducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLog: true,
        userName: action.name,
      };
    default:
      return state;
  }
};

export default rootreducer;
