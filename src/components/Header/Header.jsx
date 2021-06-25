import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import "./Header.css";

function Header({ isLoggedIn }) {

  return (
    <header className="header">
      <Logo className="logo__header" />
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
