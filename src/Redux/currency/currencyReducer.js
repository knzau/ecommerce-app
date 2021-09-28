import CurrencyActionTypes from "./currencyTypes";

const INITIAL_STATE = {
  currencies: [],
  selectedCurrency: "USD",
};

const currencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrencyActionTypes.UPDATE_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    case CurrencyActionTypes.SET_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.payload,
      };
    default:
      return state;
  }
};

export default currencyReducer;
