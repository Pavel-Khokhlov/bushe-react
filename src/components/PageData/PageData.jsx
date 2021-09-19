import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, setDataList } from "../../store/dataSlice";
import { incrementCount } from "../../store/appSlice";

import { array } from "../../utils/data";

import Loader from "../Loader/Loader";
import CardHeader from "../Card/CardHeader";
import Card from "../Card/Card";
import Button from "../Button/Button";

import "./PageData.css";

function PageData() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.app);
  const { dataList, status } = useSelector((state) => state.data);

  useEffect(() => {
    let DATA = JSON.parse(localStorage.getItem("dataList"));
    if (!DATA) {
      handleGetDataList();
    }
    dispatch(setDataList(DATA));
  }, []);

  function handleGetDataList() {
    dispatch(fetchData());
  }

  if(status === 'rejected') {
    dispatch(setDataList(array));
  }

  function handleIncrementCount(e) {
    e.preventDefault();
    dispatch(incrementCount());
  }
  if (dataList === null) {
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
