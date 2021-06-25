import React from "react";
import Button from "../Button/Button.jsx";

import "./Card.css";

function Card({
  id,
  number,
  onNumberClick,
  calltime,
  onCallDateClick,
  s_in_wait,
  s_in_talk,
  agent,
  onAgentClick,
}) {
  function handleNumberClick() {
    onNumberClick();
  }

  function handleCallDateClick() {
    onCallDateClick();
  }

  function handleAgentClick() {
    onAgentClick();
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
  console.log(day);
  console.log(time);

  return (
    <li className={cardClassName}>
      <p className="card__id">{id}</p>
      <Button
        type="button"
        onClick={handleNumberClick}
        className="button button__word text-color__blue card__number"
      >
        {`+${number}`}
      </Button>
      <Button
        type="button"
        onClick={handleCallDateClick}
        className="button button__word text-color__blue card__calltime"
      >
        {day}
      </Button>
      <p className="card__wait">{time}</p>
      <p className="card__wait">{callWait}</p>
      <p className="card__talk">{callTalk}</p>
      <Button
        type="button"
        onClick={handleAgentClick}
        className="button button__word text-color__blue card__agent"
      >
        {agent}
      </Button>
    </li>
  );
}

export default Card;
