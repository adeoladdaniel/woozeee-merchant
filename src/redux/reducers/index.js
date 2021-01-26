import { combineReducers } from "redux";
import merchantProfileReducer from "./mechantProfileReducer";
import merchantOrdeReducer from "./merchantOrdeReducer";
import merchantStoreReducer from "./merchantStoreReducer";
import merchantProductsReducer from "./merchantProductsReducer"


export default combineReducers({
  profile: merchantProfileReducer,
  order: merchantOrdeReducer,
  products:merchantProductsReducer,
  store:merchantStoreReducer,

});
