import ShopActionTypes from "./shopTypes";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

export const openProductDetail = (product) => ({
  type: ShopActionTypes.OPEN_PRODUCT_DETAIL,
  payload: product,
});
