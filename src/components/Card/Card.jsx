import React from "react";
import Button from "../Button/Button.jsx";

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
  function handlePhoneClick(e) {
    e.preventDefault();
    onGetPhoneInfo(number);
  }

  const cardClassName = `card ${id % 2 ? "bg-color__grey" : ""}`;

  // CALL WAIT DURATION
  const MinutsWait = Math.floor(s_in_wait / 60);
  const SecondsWait = s_in_wait % 60;
  const callWait = `${MinutsWait}м : ${SecondsWait}с`;

  // CALL TALK DURATION
  const MinutsTalk = Math.floor(s_in_talk / 60);
  const SecondsTalk = s_in_talk % 60;
  const callTalk = `${MinutsTalk}м : ${SecondsTalk}с`;

  var day = new Date(calltime * 1000).toLocaleDateString("ru-RU");
  var time = new Date(calltime * 1000).toLocaleTimeString("ru-RU");

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
      <p className="paragraph">{day}</p>
      <p className="paragraph">{time}</p>
      <p className="paragraph">{callWait}</p>
      <p className="paragraph">{callTalk}</p>
      <p className="paragraph">{agent}</p>
    </li>
  );
}

export default Card;
