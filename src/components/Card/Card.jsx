import React from "react";
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
  onGetPhoneInfo,
}) {
  const { convertSeconds, convertDate, convertTime } = useConvert();

  function handlePhoneClick(e) {
    e.preventDefault();
    onGetPhoneInfo(number);
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
