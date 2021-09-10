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

export const selectCategory = memoize((collectionUrlParam) =>
  createSelector([selectCategories], (categories) =>
    categories?.find((collection) => collection.name === collectionUrlParam)
  )
);
