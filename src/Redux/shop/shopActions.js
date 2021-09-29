import ShopActionTypes from "./shopTypes";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

export const openProductDetail = (product) => ({
  type: ShopActionTypes.OPEN_PRODUCT_DETAIL,
  payload: product,
});

export const setProductPrice = (product) => ({
  type: ShopActionTypes.SET_PRODUCT_PRICE,
  payload: product,
});

export const setCategorySlug = (categories) => ({
  type: ShopActionTypes.SET_CATEGORY_SLUG,
  payload: categories,
});

export const setCategoryMenu = (categoryName) => ({
  type: ShopActionTypes.SET_CATEGORY_MENU,
  payload: categoryName,
});
