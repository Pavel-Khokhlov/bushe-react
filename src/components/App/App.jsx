import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useSelector, useDispatch } from "react-redux";
import {
  loginApp,
  logoutApp,
  closeAllPopups,
  openPopup,
  setTitlePopup,
} from "../../store/appSlice";
import { setCurrentUser, removeCurrentUser } from "../../store/userSlice";

import { setNoData, setDataList, setFilteredList, resetFilteredList } from "../../store/dataSlice";

import Header from "../../components/Header/Header";
import PageMain from "../PageMain/PageMain";
import PageData from "../PageData/PageData";
import PageStatistic from "../PageStatistic/PageStatistic";
import PageProfile from "../PageProfile/PageProfile";
import PageLogin from "../PageLogin/PageLogin";
import PageNotFound from "../PageNotFound/PageNotFound";
import Popup from "../Popup/Popup";
import api from "../../utils/Api";

import { ESC_CODE } from "../../utils/config";
import "./App.css";
import { array } from "../../utils/data";
import Loader from "../Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.app);

  const history = useHistory();

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
      closePopup();
    }
  }

  function checkCurrentUser() {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      return handleLogoutClick();
    }
    dispatch(setCurrentUser(user));
    return dispatch(loginApp());
  }

  function handleDataList() {
    dispatch(setNoData(true));
    api
      .getList()
      .then((res) => {
        localStorage.setItem("dataList", JSON.stringify(res.data));
      })
      .then(() => dispatch(setNoData(false)))
      .catch((err) => {
        console.log(err);
        getDataFromFile();
      });
  }

  function getDataFromFile() {
    localStorage.setItem("dataList", JSON.stringify(array));
    dispatch(setDataList(array));
    dispatch(setNoData(false));
  }

  function handleEditClick(values) {
    dispatch(setCurrentUser(values));
    localStorage.setItem("currentUser", JSON.stringify(values));
  }

  function handleLoginClick(values) {
    dispatch(setCurrentUser(values));
    localStorage.setItem("currentUser", JSON.stringify(values));
    dispatch(loginApp());
    history.push("/data-list");
  }

  function handleLogoutClick() {
    dispatch(removeCurrentUser());
    localStorage.removeItem("currentUser");
    localStorage.removeItem("dataList");
    dispatch(logoutApp());
    dispatch(setNoData(true));
    history.push("/");
  }

  function handleGetPhoneInfo(number) {
    dispatch(setTitlePopup(number));
    dispatch(setFilteredList(number));
    dispatch(openPopup());
    window.addEventListener("keydown", handleEsc);
  }

  function closePopup() {
    dispatch(closeAllPopups());
    dispatch(setTitlePopup(``));
    dispatch(resetFilteredList());
    window.removeEventListener("keydown", handleEsc);
  }

  if (isLoggedIn === null) {
    return <Loader />;
  }
  return (
    <>
      {isLoggedIn && <Header />}
      <Switch>
        <Route exact path="/" component={PageMain} />
        <ProtectedRoute
          path="/data-list"
          onGetPhoneInfo={handleGetPhoneInfo}
          onGetDataList={handleDataList}
          component={PageData}
        />
        <ProtectedRoute
          path="/statistic"
          component={PageStatistic}
        />
        <ProtectedRoute
          path="/profile"
          onEditProfile={handleEditClick}
          onSignOut={handleLogoutClick}
          component={PageProfile}
        />
        <Route path="/login">
          <PageLogin onSubmit={handleLoginClick} />
        </Route>
        <Route path="/*">
          <PageNotFound />
        </Route>
      </Switch>
      <Popup onClose={closePopup} />
    </>
  );
}

export default App;
