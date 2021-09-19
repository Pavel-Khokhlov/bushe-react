import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CardHeader from "../Card/CardHeader";
import CardInfo from "../Card/CardInfo";
import Button from "../Button/Button";

import "./Popup.css";
import { closeAllPopups, setTitlePopup } from "../../store/appSlice";
import { resetFilteredList } from "../../store/dataSlice";

const Popup = () => {
  const dispatch = useDispatch();
  const { isPopupOpen, titlePopup } = useSelector((state) => state.app);
  const { filteredList } = useSelector((state) => state.data);
  const popupClassName = `popup ${
    isPopupOpen ? "popup_opened" : "popup_closed"
  }`;

  const popupContainerClassName = `popup__container ${
    isPopupOpen ? "popup__container_opened" : "popup__container_closed"
  }`;

  function handleClosePopup() {
    dispatch(closeAllPopups());
    dispatch(setTitlePopup(``));
    dispatch(resetFilteredList());
  }

  return (
    <section className={popupClassName} onClick={handleClosePopup}>
      <div
        className={popupContainerClassName}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          type="button"
          className="button button__close-popup"
          aria-label="вернуться на страницу"
          onClick={handleClosePopup}
        />
        <h3 className="title title__login text-size__m">{titlePopup}</h3>
        <CardHeader />
        <ul className="data__list">
          {filteredList === null
            ? ""
            : filteredList.map((card) => {
                return (
                  <CardInfo
                    key={filteredList.findIndex((i) => i === card)}
                    id={filteredList.findIndex((i) => i === card) + 1 + "."}
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
