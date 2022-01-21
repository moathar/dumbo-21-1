// this is used to create a global user context. The callback will be used by another component to set the
// context.

import React from "react";
// this is just a place holder context, could be an interface if using TS
export const UserContext = React.createContext({
  user: "",
  setUserContext: (user) => {}
});
