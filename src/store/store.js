import { combineReducers, createStore } from "redux";
import rootreducer from "./reducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  rootreducer,
  userReducer,
});

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
