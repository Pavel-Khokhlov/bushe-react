import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

import "./PageMain.css";

function PageMain() {
  return (
    <section className="main">
      <Logo className="logo__main" />
      <h1 className="title title__main text-size__l">база данных</h1>
      <h2 className="subtitle subtitle__main text-size__m">
        Только для сотрудников компании.
      </h2>
      <NavLink
        to="/login"
        className="nav__item"
        activeClassName="nav__item_active"
      >
        <Button className="button button__main button__main_active text-color__white">ВХОД</Button>
      </NavLink>
    </section>
  );
}

export default PageMain;
