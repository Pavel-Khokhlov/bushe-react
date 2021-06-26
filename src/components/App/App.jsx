import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import Header from "../../components/Header/Header";
import PageMain from "../PageMain/PageMain";
import PageData from "../PageData/PageData";
import PageStatistic from "../PageStatistic/PageStatistic";
import PageProfile from "../PageProfile/PageProfile";
import PageLogin from "../PageLogin/PageLogin";
import PageNotFound from "../PageNotFound/PageNotFound";
import api from "../../utils/Api";

import { COUNT } from "../../utils/config";
import "./App.css";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [dataList, setDataList] = useState();
  const [countState, setCountState] = useState({
    count: COUNT,
  });

  useEffect(() => {
    const data = localStorage.getItem("dataList");
    if (data === null) {
      getDataList();
    }
    setDataList(data);
  }, []);

  useEffect(() => {
    checkCurrentUser();
    if (loggedIn === true) {
      history.push("/data-list");
    } else {
      history.push("/");
    }
  }, [loggedIn])

  function checkCurrentUser() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
      return handleSignOutClick();
    }
    setCurrentUser((prevState, prevProps) => {
      return {
        email: (prevState.email = user.email),
        password: (prevState.password = user.password),
      };
    });
    return setLoggedIn(true);
  }

  function getDataList() {
    api
      .getList()
      .then((res) => {
        localStorage.setItem("dataList", JSON.stringify(res.data));
        setDataList(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleGetMoreDataList() {
    setCountState((prevCountState, prevProps) => {
      return { count: prevCountState.count + 30 };
    });
  }

  function handleEditClick(email, password) {
    setCurrentUser((prevState, prevProps) => {
      return {
        email: (prevState.email = email),
        password: (prevState.password = password),
      };
    });
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }

  function handleSignInClick(email, password) {
    setCurrentUser((prevState, prevProps) => {
      return {
        email: (prevState.email = email),
        password: (prevState.password = password),
      };
    });
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    setLoggedIn(true);
    history.push("/data-list");
  }

  function handleSignOutClick() {
    setCurrentUser((prevState, prevProps) => {
      return {
        email: (prevState.email = ""),
        password: (prevState.password = ""),
      };
    });
    localStorage.removeItem("currentUser");
    setLoggedIn( State => State = false);
    history.push("/");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {loggedIn && <Header isLoggedIn={loggedIn} />}
      <Switch>
        <Route exact path="/" component={PageMain} />
        <ProtectedRoute
          path="/data-list"
          isLoggedIn={loggedIn}
          data={dataList}
          count={countState.count}
          onGetMoreDataListClick={handleGetMoreDataList}
          component={PageData}
        />
        <ProtectedRoute
          path="/statistic"
          isLoggedIn={loggedIn}
          component={PageStatistic}
        />
        <ProtectedRoute
          path="/profile"
          isLoggedIn={loggedIn}
          onEditProfile={handleEditClick}
          onSignOut={handleSignOutClick}
          component={PageProfile}
        />
        <Route path="/login">
          <PageLogin isLoggedIn={loggedIn} onSignIn={handleSignInClick} />
        </Route>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
