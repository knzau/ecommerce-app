import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCategories = createSelector(
  [selectShop],
  (shop) => shop.categories
);

export const selectCategoryId = createSelector(
  [selectCategories],
  (categories) => Object.keys(categories)
);

export const selectCategory = memoize((categoryUrlParam) =>
  createSelector([selectCategories], (categories) =>
    categories?.find(
      (category) =>
        category.name.includes(categoryUrlParam) || categoryUrlParam === 0
    )
  )
);

export const selectProducts = createSelector(
  [selectCategory],
  (category) => category.products
);

export const selectCurrencies = createSelector(
  [selectShop],
  (shop) => shop.currencies
);

export const selectProductDetails = createSelector(
  [selectShop],
  (shop) => shop.productDetails
);

export const setinitialCategoryName = createSelector(
  [selectCategory],
  (category) => category?.name[0]
);
