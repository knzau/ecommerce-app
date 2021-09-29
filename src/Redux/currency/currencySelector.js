import memoize from "lodash.memoize";
import { createSelector } from "reselect";

const selectCurrency = (state) => state.currency;

export const selectCurrencies = createSelector(
  [selectCurrency],
  (currency) => currency.currencies
);

export const selectCurrentCurrency = createSelector(
  [selectCurrency],
  (currency) => currency.selectedCurrency
);

export const selectProductPrice = memoize((prices) =>
  createSelector(
    [selectCurrentCurrency],
    (currentCurrency) => prices.find((item) => item.currency === "USD").amount
  )
);
