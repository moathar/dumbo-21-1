/**
 * @type {Customer[]}
 */
let customers = [
  {
    name: "Mr Frodo",
    id: 1000,
    type: "Standard",
    desc: "A little man with hairy feet"
  },
  {
    name: "James Bond",
    id: 1001,
    type: "Premium",
    desc: "Spy who likes it stirred but not shaken"
  },
  {
    name: "Billy Ocean",
    id: 2003,
    type: "Standard",
    desc: "musician and singer who did a few good tracks"
  },
  {
    name: "Jack Reacher",
    id: 2004,
    type: "Standard",
    desc: "Brain child of Lee Child who only exists in Child's brain"
  },
  {
    name: "Tom Cruise",
    id: 2005,
    type: "Premium",
    desc: "Another litte fella but this one does his own stunts - apparently"
  },
  {
    name: "Kevin Spacy",
    id: 2006,
    type: "Premium",
    desc: "Once popular, not any more."
  },
  {
    name: "Sean Connery",
    id: 2007,
    type: "Premium",
    desc: "The man behind the spy who likes it stirred but not shaken"
  },
  {
    name: "Brian Adams",
    id: 2008,
    type: "Premium",
    desc: " A non-threatening Rock Star "
  }
];

export function getCustomers() {
  return customers;
}

/**
 * @param {id} id
 * @returns {Customer}
 */
export function getCustomer(id) {
  return customers.find((cust) => cust.id === id);
}

/**
 * @param {id} id
 * @returns {void}
 */
export function deleteCustomer(id) {
  customers = customers.filter((cust) => cust.id !== id);
}

/**
 * @typedef {{ name: string; id: number; type: string; }} Customer
 */
