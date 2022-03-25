import * as React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { UserStore } from "../../store/userStore";

export default function AuthGuard({ children }) {
  let userId = UserStore.useState((s) => s.id);

  let location = useLocation();

  //uncomment when needed
  if (!userId) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
