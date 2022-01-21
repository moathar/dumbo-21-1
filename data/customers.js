/**
 * @type {Customer[]}
 */
let customers = [
  {
    name: "Miss Monica",
    number: 1995,
    type: "Standard"
  },
  {
    name: "Mr Stankonia",
    number: 2000,
    type: "Premium"
  },
  {
    name: "Billy Ocean",
    number: 2003,
    type: "Standard"
  },
  {
    name: "Mr Tubthumper",
    number: 1997,
    type: "Standard"
  },
  {
    name: "Mrs Spencer",
    number: 1998,
    type: "Standard"
  }
];

export function getCustomers() {
  return customers;
}

/**
 * @param {number} number
 * @returns {Customer}
 */
export function getCustomer(number) {
  return customers.find((cust) => cust.number === number);
}

/**
 * @param {number} number
 * @returns {void}
 */
export function deleteCustomer(number) {
  customers = customers.filter((cust) => cust.number !== number);
}

/**
 * @typedef {{ name: string; number: number; type: string; }} Customer
 */
