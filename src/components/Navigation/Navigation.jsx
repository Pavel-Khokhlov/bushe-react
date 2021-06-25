import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";

import "./Navigation.css";

const Navigation = ({ isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <nav className="nav">
        {isLoggedIn ? <NavLink
          exact
          to="/data-list"
          className="nav__item"
          activeClassName="nav__item_active"
        >
          База данных
        </NavLink> : ""} 
        {isLoggedIn ? <NavLink
          to="/statistic"
          className="nav__item"
          activeClassName="nav__item_active"
        >
          Статистика
        </NavLink> : ""}
        {isLoggedIn ? <NavLink
          to="/profile"
          className="nav__item"
          activeClassName="nav__item_active"
        >
          {currentUser.email}
        </NavLink> : ""}
        {isLoggedIn ? "" : <NavLink
          to="/register"
          className="nav__item"
          activeClassName="nav__item_active"
        >
          Регистрация
        </NavLink>}
        {isLoggedIn ? "" : <NavLink
          to="/login"
          className="nav__item"
          activeClassName="nav__item_active"
        >
          Вход
        </NavLink>}
      </nav>
  );
};

export default Navigation;
