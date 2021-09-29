export const productPrice = (product, currentCurrency) =>
  product.prices.find((item) => item.currency === currentCurrency.toUpperCase())
    .amount;

export const initialCategoryName = (categories) =>
  categories?.map((category) => category.name)[0];
