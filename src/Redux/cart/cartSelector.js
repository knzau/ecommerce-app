import { createSelector } from "reselect";
import memoize from "lodash.memoize";
import { productPrice } from "./cartUtils";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = memoize((currentCurrency) =>
  createSelector([selectCartItems], (cartItems) =>
    cartItems
      ?.reduce(
        (accumulatedQuantity, cartItem) =>
          accumulatedQuantity +
          cartItem.quantity *
            parseFloat(productPrice(cartItem.prices, currentCurrency)),
        0
      )
      .toFixed(2)
  )
);
