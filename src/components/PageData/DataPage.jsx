import React from "react";
import Card from "../Card/Card.jsx";
import Button from "../Button/Button.jsx";

import "./PageData.css";

function PageData({ count, onGetMoreDataListClick }) {
  const data = JSON.parse(localStorage.getItem("dataList"));

  function handleMoreClick(e) {
    e.preventDefault();
    onGetMoreDataListClick();
  }

  return (
    <section className="data">
      <div className="card">
        <p className="card__wait">№</p>
        <p className="card__wait">Телефон</p>
        <p className="card__talk">Дата</p>
        <p className="card__talk">Время</p>
        <p className="card__talk">Ожидание</p>
        <p className="card__talk">Длительность</p>
        <p className="card__talk">Оператор</p>
      </div>
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
          Ещё
        </Button>
      )}
    </section>
  );
}

export default PageData;
