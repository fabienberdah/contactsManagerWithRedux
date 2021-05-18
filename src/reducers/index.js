//this file is a meeting place for all of our reducers
import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

export default combineReducers({
  contact: contactReducer,
});
