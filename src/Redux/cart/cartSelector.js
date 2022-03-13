import { createSelector } from "reselect";
import memoize from "lodash.memoize";
import { productPrice } from "./cartUtils";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectAttribItems = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.attributes
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectToggleAttribHidden = createSelector(
  [selectCart],
  (cart) => cart.toggleAttribHidden
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartProducts) =>
    cartProducts.reduce(
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
