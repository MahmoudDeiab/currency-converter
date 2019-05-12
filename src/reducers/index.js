import { combineReducers } from "redux";
import ratesReducer from "./Rates/ratesReducer";
import converterReducer from "./Converter/converterReducer";

export default combineReducers({
  rates: ratesReducer,
  converter: converterReducer
});
