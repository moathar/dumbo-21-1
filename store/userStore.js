import { Store } from "pullstate";

// this one stores the current user details
export const UserStore = new Store({
  name: "guest",
  id: "",
  email: ""
});

export const StatStore = new Store({
  userCount: 0
});
