export const currencyIcons = {
  USD: "&#36;" || "$",
  EUR: "&#8364;" || "€",
  JPY: "&#165;" || "¥",
  GBP: "&#163;" || "£",
  AUD: "&#36;" || "$",
  RUB: "&#1088;" || "₽",
};

export const displayAttrValues = (product) =>
  product.attributes.map((attribute) => attribute.displayValue);

export const arraysMatch = function (a, b) {
  a.sort();
  b.sort();
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};
