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
import Popup from "../Popup/Popup";
import api from "../../utils/Api";

import { COUNT, ESC_CODE } from "../../utils/config";
import "./App.css";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(null);
  const [noData, setNoData] = useState(true);
  const [dataFiltered, setDataFiltered] = useState(null);
  const [statisticData, setStatisticData] = useState(null);
  const [titleInfo, setTitleInfo] = useState("");
  const [countState, setCountState] = useState({
    count: COUNT,
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    checkCurrentUser();
    if (loggedIn === true) {
      history.push("/data-list");
    } else {
      history.push("/");
    }
  }, [loggedIn]);

  function handleEsc(e) {
    if (e.keyCode === ESC_CODE) {
      closePopup();
    }
  }

  function checkCurrentUser() {
    let user = JSON.parse(localStorage.getItem("currentUser"));
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

  function handleDataList() {
    api
      .getList()
      .then((res) => {
        localStorage.setItem("dataList", JSON.stringify(res.data));
      })
      .then(() => setNoData(false))
      .catch((err) => console.log(err));
  }

  function handleGetMoreDataList() {
    setCountState((prevCountState, prevProps) => {
      return { count: prevCountState.count + COUNT };
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
    localStorage.removeItem("dataList");
    setLoggedIn((state) => (state = false));
    setNoData(true);
    history.push("/");
  }

  let data = JSON.parse(localStorage.getItem("dataList"));
  function handleGetPhoneInfo(number) {
    setTitleInfo(`Информация по телефону: +${number}`);
    setDataFiltered(data.filter((arr) => arr[0] === number));
    setIsPopupOpen(true);
    window.addEventListener("keydown", handleEsc);
  }

  function closePopup() {
    setIsPopupOpen(false);
    setTitleInfo("");
    setDataFiltered(null);
    window.removeEventListener("keydown", handleEsc);
  }

  function handleSearchClick(agent) {
    const newArray = data.filter((arr) => String(arr[4]) === agent);
    setStatisticData(newArray);
  }

  if (loggedIn === null) {
    return "Загрузка...";
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      {loggedIn && <Header isLoggedIn={loggedIn} />}
      <Switch>
        <Route exact path="/" component={PageMain} />
        <ProtectedRoute
          path="/data-list"
          isLoggedIn={loggedIn}
          noData={noData}
          setNoData={setNoData}
          count={countState.count}
          onGetMoreDataListClick={handleGetMoreDataList}
          onGetPhoneInfo={handleGetPhoneInfo}
          onGetDataList={handleDataList}
          component={PageData}
        />
        <ProtectedRoute
          path="/statistic"
          isLoggedIn={loggedIn}
          statisticData={statisticData}
          setStatisticData={setStatisticData}
          onSearch={handleSearchClick}
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
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        title={titleInfo}
        dataFiltered={dataFiltered}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
