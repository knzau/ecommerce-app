import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCategories = createSelector(
  [selectShop],
  (shop) => shop.categories
);

export const selectInitialCategorySlug = createSelector(
  [selectShop],
  (shop) => shop.initialCategoryName
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

export const selectProductDetails = createSelector(
  [selectShop],
  (shop) => shop.productDetails
);

export const setinitialCategoryName = createSelector(
  [selectCategory],
  (category) => category?.name[0]
);
