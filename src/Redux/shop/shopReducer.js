import ShopActionTypes from "./shopTypes";

const INITIAL_STATE = {
  categories: null,
  currencies: [],
  productDetails: null,
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
    default:
      return state;
  }
};

export default shopReducer;
