import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useSelector, useDispatch } from "react-redux";
import {
  loginApp,
  closeAllPopups,
  logoutApp,
} from "../../store/appSlice";
import { removeCurrentUser, setCurrentUser } from "../../store/userSlice";

import Header from "../../components/Header/Header";
import PageMain from "../PageMain/PageMain";
import PageData from "../PageData/PageData";
import PageStatistic from "../PageStatistic/PageStatistic";
import PageProfile from "../PageProfile/PageProfile";
import PageLogin from "../PageLogin/PageLogin";
import PageNotFound from "../PageNotFound/PageNotFound";
import Popup from "../Popup/Popup";

import { ESC_CODE } from "../../utils/config";
import "./App.css";
import Loader from "../Loader/Loader";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn, isPopupOpen } = useSelector((state) => state.app);

  useEffect(() => {
    checkCurrentUser();
    if (isLoggedIn === true) {
      history.push("/data-list");
    } else {
      history.push("/");
    }
  }, [isLoggedIn]);

  function handleEsc(e) {
    if (e.keyCode === ESC_CODE) {
      dispatch(closeAllPopups());
    }
  }

  isPopupOpen
    ? window.addEventListener("keydown", handleEsc)
    : window.removeEventListener("keydown", handleEsc);

  function checkCurrentUser() {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      dispatch(removeCurrentUser());
      dispatch(logoutApp());
      history.push("/");
      return;
    }
    dispatch(setCurrentUser(user));
    return dispatch(loginApp());
  }

  if (isLoggedIn === null) {
    return <Loader />;
  }
  return (
    <>
      {isLoggedIn && <Header />}
      <Switch>
        <Route exact path="/" component={PageMain} />
        <ProtectedRoute path="/data-list" component={PageData} />
        <ProtectedRoute path="/statistic" component={PageStatistic} />
        <ProtectedRoute path="/profile" component={PageProfile} />
        <Route path="/login" component={PageLogin} />
        <Route path="/*" component={PageNotFound} />
      </Switch>
      <Popup />
    </>
  );
}

export default App;
