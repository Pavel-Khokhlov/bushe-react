import React from "react";

import "./Card.css";

function CardHeader() {

  return (
    <div className="card card__header">
        <p className="paragraph">№</p>
        <p className="paragraph">Телефон</p>
        <p className="paragraph">Дата</p>
        <p className="paragraph">Время</p>
        <p className="paragraph">Ожидание</p>
        <p className="paragraph">Длительность</p>
        <p className="paragraph">Оператор</p>
      </div>
  );
}

export default CardHeader;
