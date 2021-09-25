import CurrencyActionTypes from "./currencyTypes";

export const updateCurrencies = (currenciesData) => ({
  type: CurrencyActionTypes.UPDATE_CURRENCIES,
  payload: currenciesData,
});

export const setCurrency = (selectedCurrency) => ({
  type: CurrencyActionTypes.SET_CURRENCY,
  payload: selectedCurrency,
});
