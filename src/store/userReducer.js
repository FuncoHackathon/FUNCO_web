const initialState = [
  {
    email: "abc@gmail.com",
    password: "abc",
    userName: "김민성",
  },
  {
    email: "dragonroadnsk@gmail.com",
    password: "nsk1112!",
    userName: "전용길",
  },
];

export const SIGNUP = "SIGN_UP";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return [
        ...state,
        {
          email: action.email,
          password: action.password,
          userName: action.name,
        },
      ];
    default:
      return state;
  }
};

export default userReducer;
