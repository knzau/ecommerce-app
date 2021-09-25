import ShopActionTypes from "./shopTypes";

const INITIAL_STATE = {
  categories: null,
  currencies: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        categories: action.payload,
      };
    case ShopActionTypes.UPDATE_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    case ShopActionTypes.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
