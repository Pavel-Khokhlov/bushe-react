import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import "./Header.css";

function Header({ isLoggedIn, location }) {
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const { pathname } = location;
    setCurrentPath(pathname);
  }, [location]);

  if (
    currentPath === "/data-list" ||
    currentPath === "/statistic" ||
    currentPath === "/profile"
  ) {
  return (
    <header className="header">
      <Logo className="logo__header" />
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
  }
  return ""
}

export default withRouter(Header);
