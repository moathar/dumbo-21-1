/**
 * @price {Product[]}
 */
let products = [
  {
    name: "Bananas",
    code: "FB12345",
    price: 1.5,
    category: "fruit"
  },
  {
    name: "Apples",
    code: "FA2345",
    price: 2.99,
    category: "fruit"
  },
  {
    name: "Pears",
    code: "FP7654",
    price: 1.99,
    category: "fruit"
  },
  {
    name: "Mangoes",
    code: "FM9876",
    price: 2.5,
    category: "fruit"
  },
  {
    name: "Apricots",
    code: "FA87654",
    price: 1.75,
    category: "fruit"
  },
  {
    name: "Potatoes",
    code: "VP87654",
    price: 1.75,
    category: "veg"
  },
  {
    name: "Carrots",
    code: "VC87654",
    price: 1.75,
    category: "veg"
  },
  {
    name: "Onions",
    code: "VO87654",
    price: 1.6,
    category: "veg"
  },
  {
    name: "Garlic",
    code: "VGO87654",
    price: 1.2,
    category: "veg"
  }
];

export function getProducts() {
  return products;
}

/**
 * @param {code} code
 * @returns {Product}
 */
export function getProduct(code) {
  return products.find((prod) => prod.code === code);
}

/**
 * @param {cat} category
 * @returns {Product[]
 */
export function getProductsByCat(cat) {
  return products.filter((prod) => prod.category === cat);
}

/**
 * @param {code} code
 * @returns {void}
 */
export function deleteProduct(code) {
  products = products.filter((prod) => prod.code !== code);
}

/**
 * @pricedef {{ name: string; code: code; price: number }} Product
 */
