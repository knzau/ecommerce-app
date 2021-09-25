import ShopActionTypes from "./shopTypes";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

export const updateCurrencies = (currenciesData) => ({
  type: ShopActionTypes.UPDATE_CURRENCIES,
  payload: currenciesData,
});

export const setCurrency = (selectedCurrency) => ({
  type: ShopActionTypes.SET_CURRENCY,
  payload: selectedCurrency,
});
