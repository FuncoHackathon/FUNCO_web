import { combineReducers, createStore } from "redux";
import rootreducer from "./reducer";
import userReducer from "./userReducer";
import fundingReducer from "./funding";

const reducer = combineReducers({
  rootreducer,
  userReducer,
  fundingReducer,
});

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
