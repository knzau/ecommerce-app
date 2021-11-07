import CurrencyActionTypes from "./currencyTypes";

const INITIAL_STATE = {
  currencies: [],
  selectedCurrency: "USD",
  isDropDownOpen: false,
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
    case CurrencyActionTypes.SET_DROPDOWN_OPEN:
      return {
        ...state,
        isDropDownOpen: !state.isDropDownOpen,
      };
    default:
      return state;
  }
};

export default currencyReducer;
