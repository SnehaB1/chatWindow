import { combineReducers } from "redux";
import storeData from "./chat";

const rootReducer = combineReducers({
  activeChat: storeData
});

export default rootReducer;
