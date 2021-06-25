import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import Header from "../../components/Header/Header";
import PageMain from "../PageMain/PageMain";
import PageData from "../PageData/DataPage";
import PageStatistic from "../PageStatistic/PageStatistic";
import PageProfile from "../PageProfile/PageProfile";
import PageLogin from "../PageLogin/PageLogin";
import PageRegister from "../PageRegister/PageRegister";
import PageNotFound from "../PageNotFound/PageNotFound";
import api from "../../utils/Api";

import { COUNT } from "../../utils/config";
import "./App.css";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({
    email: "mail@gmail.com",
    name: "Name",
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header isLoggedIn={loggedIn} />
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
          component={PageProfile}
        />
        <Route path="/login" component={PageLogin} />
        <Route path="/register" component={PageRegister} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
