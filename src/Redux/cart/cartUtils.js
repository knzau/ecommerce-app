export const addItemToCart = (cartItems, attribItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, attribItems, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, attribItems, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const productPrice = (prices, currentCurrency) =>
  prices.find((item) => item.currency.includes(currentCurrency.substr(-3)))
    .amount;

export const addAttribItemToCart = (attribItems, attribItemToAdd) => {
  console.log(attribItems);
  const existingAttribItem = attribItems?.find(
    (attribItem) => attribItem.id === attribItemToAdd.id
  );

  if (existingAttribItem) {
    console.log(
      attribItems.filter(
        (attribItem) => attribItem.id !== existingAttribItem.id
      )
    );
    return attribItems.filter(
      (attribItem) => attribItem.id !== existingAttribItem.id
    );
  }
  return [...attribItems, { ...attribItemToAdd }];
};
