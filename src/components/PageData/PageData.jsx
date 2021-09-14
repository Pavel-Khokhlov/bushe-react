import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNoData } from "../../store/dataSlice";
import { incrementCount } from "../../store/appSlice";

import Loader from "../Loader/Loader";
import CardHeader from "../Card/CardHeader";
import Card from "../Card/Card";
import Button from "../Button/Button";

import "./PageData.css";

function PageData({ onGetPhoneInfo, onGetDataList }) {
  const { count } = useSelector((state) => state.app);
  const { noData, dataList } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!dataList) {
      dispatch(setNoData(false));
    }
    handleGetDataList();
  }, []);

  function handleGetDataList() {
    onGetDataList();
  }

  function handleIncrementCount(e) {
    e.preventDefault();
    dispatch(incrementCount());
  }
  if (noData) {
    return <Loader />;
  }
  return (
    <section className="data">
      <CardHeader />
      <ul className="data__list">
        {dataList
          .filter((v, i) => i < count)
          .map((card) => {
            return (
              <Card
                key={dataList.findIndex((i) => i === card)}
                id={dataList.findIndex((i) => i === card) + 1 + "."}
                number={card[0]}
                calltime={card[1]}
                s_in_wait={card[2]}
                s_in_talk={card[3]}
                agent={card[4]}
                onGetPhoneInfo={onGetPhoneInfo}
              />
            );
          })}
      </ul>
      {dataList.length > count && (
        <Button
          type="button"
          className="button button__word text-color__blue paragraph text-size__s"
          onClick={handleIncrementCount}
        >
          Ещё...
        </Button>
      )}
    </section>
  );
}

export default PageData;
