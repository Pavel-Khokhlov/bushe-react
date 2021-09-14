import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Navigation.css";

const Navigation = () => {
  const { isLoggedIn} = useSelector(
    (state) => state.app
  );
  const { currentUser } = useSelector(
    (state) => state.users
  );

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
      </nav>
  );
};

export default Navigation;
