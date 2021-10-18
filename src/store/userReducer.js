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

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
