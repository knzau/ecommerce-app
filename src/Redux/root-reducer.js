import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopReducer from "./shop/shopReducer";
import currencyReducer from "./currency/currencyReducer";
import cartReducer from "./cart/cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "shop", "currency"],
};

const rootReducer = combineReducers({
  shop: shopReducer,
  currency: currencyReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
