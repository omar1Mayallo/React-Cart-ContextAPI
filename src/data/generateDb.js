module.exports = function () {
  const {faker} = require("@faker-js/faker");
  let products = [];
  const productsUrlCode = [
    "K5T67yg",
    "HzQxnHF",
    "bXWLrGj",
    "qCmsDb6",
    "MM5B67D",
    "jbjfc2y",
    "48CxTX8",
    "W2GQbfT",
    "PZCYprP",
    "bs4xktd",
    "QpyjB5b",
    "NY37gZd",
    "YPS8pHj",
    "n0mtb3r",
    "Ln7V3Cn",
    "Gxz7JWC",
    "Csy6S2y",
    "FH8Pj6b",
    "Kjyjfxy",
    "bb7LXwK",
  ];
  const generateUrl = (code, idx) =>
    `https://i.ibb.co/${code[idx]}/product-${idx + 1}.jpg`;
  for (let i = 0; i < productsUrlCode.length; i++) {
    const product = {
      id: faker.datatype.uuid(),
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      description: faker.lorem.paragraph(),
      imgUrl: generateUrl(productsUrlCode, i),
      qtyInStock: Math.floor(Math.random() * 16),
      rating: Math.floor(Math.random() * 6),
      reviews: Math.floor(Math.random() * 50),
    };
    products.push(product);
  }
  return {
    products,
  };
};
