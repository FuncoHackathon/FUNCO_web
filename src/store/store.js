import { combineReducers, createStore } from "redux";
import rootreducer from "./reducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  rootreducer,
  userReducer,
});

const store = createStore(reducer);

export default store;
