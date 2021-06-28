import React from "react";
import CardHeader from "../Card/CardHeader";
import Card from "../Card/Card";
import Button from "../Button/Button";

import "./PageData.css";

function PageData({ count, onGetMoreDataListClick, onGetPhoneInfo }) {
  const data = JSON.parse(localStorage.getItem("dataList"));

  function handleMoreClick(e) {
    e.preventDefault();
    onGetMoreDataListClick();
  }

  return (
    <section className="data">
      <CardHeader />
      <ul className="data__list">
        {data
          .filter((v, i) => i < count)
          .map((card) => {
            return (
              <Card
                key={data.findIndex((i) => i === card)}
                id={data.findIndex((i) => i === card) + 1 + "."}
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
      {data.length > count && (
        <Button
          type="button"
          className="button button__word text-color__blue paragraph text-size__s"
          onClick={handleMoreClick}
        >
          Ещё...
        </Button>
      )}
    </section>
  );
}

export default PageData;
