import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopReducer from "./shop/shopReducer";
import currencyReducer from "./currency/currencyReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist", "collectionItem"],
};

const rootReducer = combineReducers({
  shop: shopReducer,
  currency: currencyReducer,
});

export default persistReducer(persistConfig, rootReducer);
