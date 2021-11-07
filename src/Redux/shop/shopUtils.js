export const productPrice = (product, currentCurrency) =>
  product.prices.find((item) =>
    item.currency.includes(currentCurrency.substr(-3))
  ).amount;

export const initialCategoryName = (categories) =>
  categories?.map((category) => category.name)[0];
