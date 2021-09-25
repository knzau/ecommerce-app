import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectCurrency = (state) => state.currency;

export const selectCurrencies = createSelector(
  [selectCurrency],
  (currency) => currency.currencies
);

export const selectCurrentCurrency = createSelector(
  [selectCurrency],
  (currency) => currency.selectedCurrency
);

export const selectProductPrice = memoize((product) =>
  createSelector(
    [selectCurrentCurrency],
    (currentCurrency) =>
      product.prices.find(
        (currencyType) => currencyType.currency === currentCurrency
      ).amount
  )
);
