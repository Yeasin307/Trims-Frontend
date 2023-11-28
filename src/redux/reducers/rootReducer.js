import { combineReducers } from "redux";
import accessoriesReducer from "./accessoriesReducer";
import componentReducer from "./componentReducer";
import productsReducer from "./productsReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  productsData: productsReducer,
  productData: productReducer,
  accessoriesData: accessoriesReducer,
  componentData: componentReducer
});

export default rootReducer;
