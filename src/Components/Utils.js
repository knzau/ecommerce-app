export const currencyIcons = {
  USD: "&#36;",
  EUR: "&#8364;",
  JPY: "&#165;",
  GBP: "&#163;",
  AUD: "&#36;",
  RUB: "&#1088;",
};

export const displayAttrValues = (product) =>
  product.attributes.map((attribute) =>
    attribute.items.map((item) => item).map((item) => item.displayValue)
  );
