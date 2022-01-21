import "./styles.css";

import React, { useState } from "react";
//import Counter from "./Counter";
import { UserContext } from "../../data/userContext";
import LoginForm from "./comps/LoginForm";

// the user context will be set up by the login component when it has authenticated the user.
//export const UserContext = React.createContext({ name: "" });

export default function App() {
  const [user, setUser] = useState("guest");

  console.log("App rendered, user state:", user);
  // this doesn't seem to update state when called from another component.
  const setUserContext = (val) => {
    setUser(val);

    console.log("App: logged in user value is:", user);
  };

  // const tryMe = () => {
  //   setUserContext("new bloke"); // this doesn't work!
  //   console.log("App: user value is:", user);
  // };

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUserContext }}>
        <h2>Welcome {user} please login to our fruitulous service</h2>
        {/* <LoginForm callback={setUserContext} /> */}
        <LoginForm />
        {/* <button onClick={tryMe}>Try Me </button> */}
      </UserContext.Provider>
    </div>
  );
}
