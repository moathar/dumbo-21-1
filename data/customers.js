/**
 * @type {Customer[]}
 */
let customers = [
  {
    name: "Mr Frodo",
    number: 1000,
    type: "Standard",
    desc: "A little man with hairy feet"
  },
  {
    name: "James Bond",
    number: 2000,
    type: "Premium",
    desc: "Spy who likes it stirred but not shaken"
  },
  {
    name: "Billy Ocean",
    number: 2003,
    type: "Standard",
    desc: "musician and singer who did a few good tracks"
  },
  {
    name: "Jack Reacher",
    number: 2004,
    type: "Standard",
    desc: "Brain child of Lee Child who only exists in Child's brain"
  },
  {
    name: "Tom Cruise",
    number: 2005,
    type: "Premium",
    desc: "Another litte fella but this one does his own stunts - apparently"
  },
  {
    name: "Kevin Spacy",
    number: 2006,
    type: "Premium",
    desc: "Once popular, not any more."
  },
  {
    name: "Sean Connery",
    number: 2007,
    type: "Premium",
    desc: "The man behind the spy who likes it stirred but not shaken"
  },
  {
    name: "Brian Adams",
    number: 2008,
    type: "Premium",
    desc: " A non-threatening Rock Star "
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
