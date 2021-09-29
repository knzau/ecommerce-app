import ShopActionTypes from "./shopTypes";

import { initialCategoryName } from "./shopUtils";

const INITIAL_STATE = {
  categories: null,
  currencies: [],
  productDetails: null,
  productPrice: "",
  initialCategoryName: "",
  menuItemClicked: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        categories: action.payload,
      };
    case ShopActionTypes.OPEN_PRODUCT_DETAIL:
      return {
        ...state,
        productDetails: action.payload,
      };
    case ShopActionTypes.SET_CATEGORY_SLUG:
      return {
        ...state,
        initialCategoryName: initialCategoryName(action.payload),
      };
    case ShopActionTypes.SET_PRODUCT_PRICE:
      return {
        ...state,
        productDetails: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
