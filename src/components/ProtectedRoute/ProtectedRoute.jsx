import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { isLoggedIn } = useSelector((state) => state.app);
  return (
    <Route>
      {() =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute;
