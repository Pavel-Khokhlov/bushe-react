import React from "react";
import { useConvert } from "../Hooks/useConvert";
import { useMath } from "../Hooks/useMath";

const StatisticInfo = ({ array, title }) => {
  const { convertSeconds } = useConvert();
  const { runSum, runMaxValue, runMiddleValue } = useMath();
  const countOfCalls = array.length;
    // SUM WAIT DURATION
    const sumWait = runSum(array, 2);
    const printCountWait = convertSeconds(sumWait);
    // MAX WAIT DURATION
    const maxWait = runMaxValue(array, 2);
    const printMaxWait = convertSeconds(maxWait);
    // MIDDLE WAIT
    const midWait = runMiddleValue(array, 2);
    const printMidWait = convertSeconds(midWait);
    // SUM TALK DURATION
    const sumTalk = runSum(array, 3);
    const printCountTalk = convertSeconds(sumTalk);
    // MAX TALK DURATION
    const maxTalk = runMaxValue(array, 3);
    const printMaxTalk = convertSeconds(maxTalk);
    // MIDDLE WAIT
    const midTalk = runMiddleValue(array, 3);
    const printMidTalk = convertSeconds(midTalk);
  
    // DEFINE COUNT OF PHONE NUMBER
    let countNumbers = {};
    const resultNumber = array.map((item) => item[0]);
    resultNumber.map((el) => (countNumbers[el] = 1 + (countNumbers[el] || 0)));
    const countsOfNumbers = Object.keys(countNumbers).length;

  return (
    <article className="statistic__info">
      <h2 className="title title__main title__margin_statistic">{title}</h2>
      <div className="statistic__common">
        <p className="paragraph">Количество принятых вызовов:</p>
        <p className="paragraph">{countOfCalls} звонков</p>
        <p className="paragraph">Количество звонивших номеров:</p>
        <p className="paragraph">{countsOfNumbers} номеров</p>
        <p className="paragraph">Общее время ожидание:</p>
        <p className="paragraph">{printCountWait}</p>
        <p className="paragraph">Максимальное время ожидания:</p>
        <p className="paragraph">{printMaxWait}</p>
        <p className="paragraph">Среднее время ожидания:</p>
        <p className="paragraph">{printMidWait}</p>
        <p className="paragraph">Общее время продолжительности разговоров:</p>
        <p className="paragraph">{printCountTalk}</p>
        <p className="paragraph">
          Максимальное время продолжительности разговора:
        </p>
        <p className="paragraph">{printMaxTalk}</p>
        <p className="paragraph">Среднее время продолжительности разговора:</p>
        <p className="paragraph">{printMidTalk}</p>
      </div>
    </article>
  );
};

export default StatisticInfo;
