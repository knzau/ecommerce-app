import cartActionTypes from "./cartTypes.js";
import {
  addItemToCart,
  removeItemFromCart,
  addAttribItemToCart,
} from "./cartUtils";

const INITIAL_STATE = {
  hidden: true,
  selectedAttr: [],
  cartItems: [],
  attribItems: [],
  toggleAttribHidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case cartActionTypes.ADD_ATTR_ITEM:
      return {
        ...state,
        selectedAttr: addAttribItemToCart(state.selectedAttr, action.payload),
      };
    case cartActionTypes.TOGGLE_ATTR_ITEM:
      return {
        ...state,
        toggleAttribHidden: !state.toggleAttribHidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
