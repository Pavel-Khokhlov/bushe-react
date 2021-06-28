import React from "react";
import CardHeader from "../Card/CardHeader";
import CardInfo from "../Card/CardInfo";
import Button from "../Button/Button";

import "./Popup.css";

const Popup = ({ isOpen, onClose, title, dataFiltered }) => {
  const popupClassName = `popup ${isOpen ? "popup_opened" : "popup_closed"}`;

  return (
    <section className={popupClassName} onClick={onClose}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <Button
          type="button"
          className="button button__close-popup"
          aria-label="вернуться на страницу"
          onClick={onClose}
        />
        <h3 className="title title__login text-size__m">{title}</h3>
        <CardHeader />
        <ul className="data__list">
        {dataFiltered === null ? "" : dataFiltered
          .map((card) => {
            return (
              <CardInfo
                key={dataFiltered.findIndex((i) => i === card)}
                id={dataFiltered.findIndex((i) => i === card) + 1 + "."}
                number={card[0]}
                calltime={card[1]}
                s_in_wait={card[2]}
                s_in_talk={card[3]}
                agent={card[4]}
              />
            );
          })}
      </ul>
      </div>
    </section>
  );
};

export default Popup;
