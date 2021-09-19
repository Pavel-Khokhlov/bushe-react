import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Navigation.css";

const Navigation = () => {
  const { isLoggedIn } = useSelector((state) => state.app);
  const { currentUser } = useSelector((state) => state.users);
  const { dataList } = useSelector((state) => state.data);

  // DISABLE ROUTE WHILE NO DATA
  const handleClick = (e) => {
    if (dataList === null) e.preventDefault();
  };

  return (
    <nav className="nav">
      {isLoggedIn ? (
        <NavLink
          exact
          to="/data-list"
          className="nav__item"
          activeClassName="nav__item_active"
        >
          База данных
        </NavLink>
      ) : (
        ""
      )}
      {isLoggedIn ? (
        <NavLink
          onClick={handleClick}
          to="/statistic"
          className="nav__item"
          activeClassName="nav__item_active"
        >
          Статистика
        </NavLink>
      ) : (
        ""
      )}
      {isLoggedIn ? (
        <NavLink
          to="/profile"
          className="nav__item"
          activeClassName="nav__item_active"
        >
          {currentUser.email}
        </NavLink>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navigation;
