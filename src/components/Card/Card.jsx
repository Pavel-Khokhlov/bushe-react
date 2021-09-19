import React from "react";
import { useDispatch } from "react-redux";
import { openPopup, setTitlePopup } from "../../store/appSlice.js";
import { setFilteredList } from "../../store/dataSlice.js";
import Button from "../Button/Button.jsx";

import { useConvert } from "../Hooks/useConvert";

import "./Card.css";

function Card({
  id,
  number,
  calltime,
  s_in_wait,
  s_in_talk,
  agent,
}) {
  const dispatch = useDispatch();
  const { convertSeconds, convertDate, convertTime } = useConvert();

  function handlePhoneClick(e) {
    e.preventDefault();
    dispatch(setTitlePopup(number));
    dispatch(setFilteredList(number));
    dispatch(openPopup());
  }

  const cardClassName = `card ${id % 2 ? "bg-color__grey" : ""}`;
  // CALL WAIT DURATION
  const callWait = convertSeconds(s_in_wait);
  // CALL TALK DURATION
  const callTalk = convertSeconds(s_in_talk);
  // CALL DAY & TIME
  const callDay = convertDate(calltime);
  const callTime = convertTime(calltime);

  return (
    <li className={cardClassName}>
      <p className="paragraph">{id}</p>
      <Button
        type="button"
        onClick={handlePhoneClick}
        className="button button__word text-color__blue card__number"
      >
        {`+${number}`}
      </Button>
      <p className="paragraph">{callDay}</p>
      <p className="paragraph">{callTime}</p>
      <p className="paragraph">{callWait}</p>
      <p className="paragraph">{callTalk}</p>
      <p className="paragraph">{agent}</p>
    </li>
  );
}

export default Card;
