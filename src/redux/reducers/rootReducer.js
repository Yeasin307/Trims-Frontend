import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";
import accessoriesReducer from "./accessoriesReducer";
import componentReducer from "./componentReducer";
import productsReducer from "./productsReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  productsData: productsReducer,
  productData: productReducer,
  accessoriesData: accessoriesReducer,
  componentData: componentReducer
});

export default rootReducer;
