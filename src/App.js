import "./styles.css";

import React, { useState, useEffect } from "react";
import { UserStore, StatStore } from "../../store/userStore";

import LoginForm from "./comps/LoginForm";

// the user context will be set up by the login component when it has authenticated the user.
//export const UserContext = React.createContext({ name: "" });

export default function App() {
  const [user, setUser] = useState("");
  const userCount = StatStore.useState((s) => s.userCount);

  // subscription works ok
  // useEffect(() => {
  //   const unsubscribeUserStore = UserStore.subscribe(
  //     (s) => s.id,
  //     (uid) => {
  //       console.log("user id changed to:", uid);
  //     }
  //   );

  //   return () => {
  //     unsubscribeUserStore();
  //   };
  // }, []);

  // try out the reaction where you can update a property based on an observerd changed.
  useEffect(() => {
    const unsubscribeUserStore = UserStore.createReaction(
      (s) => s,
      (s) => {
        setUser(s.name);
        StatStore.update((s) => {
          s.userCount = userCount + 1;
        });
      }
    );

    return () => {
      unsubscribeUserStore();
    };
  }, []);

  return (
    <div className="App">
      <h3>Welcome {user} please log in to our fruitulous service...</h3>
      {/* <LoginForm callback={setUserContext} /> */}
      <LoginForm />

      {userCount ? (
        <h5>we have served {userCount} happy customers today</h5>
      ) : (
        <p />
      )}
    </div>
  );
}
