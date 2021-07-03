import React from "react";

import { useConvert } from "../Hooks/useConvert";

import "./Card.css";

function CardInfo({
  id,
  number,
  calltime,
  s_in_wait,
  s_in_talk,
  agent,
}) {
  const { convertSeconds, convertDate, convertTime } = useConvert();

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
      <p className="paragraph">{`+${number}`}</p>
      <p className="paragraph">{callDay}</p>
      <p className="paragraph">{callTime}</p>
      <p className="paragraph">{callWait}</p>
      <p className="paragraph">{callTalk}</p>
      <p className="paragraph">{agent}</p>
    </li>
  );
}

export default CardInfo;
