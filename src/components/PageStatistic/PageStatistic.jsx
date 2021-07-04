import React, { useState, useEffect } from "react";
import FormSearch from "../FormSearch/FormSearch";
import Select from "../Select/Select";

import StatisticInfo from "../StatisticInfo/StatisticInfo";

import "./PageStatistic.css";

function PageStatistic({ statisticData, setStatisticData, onSearch }) {
  const data = JSON.parse(localStorage.getItem("dataList"));
  const [agent, setAgent] = useState("");
  const [titleStatistic, setTitleStatistic] = useState("");


  useEffect(() => {
    setStatisticData(null)
  }, [])

  // DEFINE AGENTS
  const resultAgents = data.map((item) => item[4]);
  const uniqueAgents = Array.from(new Set(resultAgents));

  const buttonSearchClassName = `button button__main ${
    agent
      ? "button__main_active text-color__white"
      : "button__main_inactive text-color__grey"
  }`;

  function handleAgentChange(e) {
    setAgent(e.target.value);
  }

  function handleSearchClick(e) {
    e.preventDefault();
    onSearch(agent);
    setTitleStatistic(`Cтатистика по оператору : ${agent}`);
    setAgent('');
  }

  return (
    <section className="statistic">
      <StatisticInfo array={data} title="Общая статистика" />
      <FormSearch
        title="Поиск по оператору"
        buttonTitleSearch="Поиск"
        buttonSearchClassName={buttonSearchClassName}
        onSubmit={handleSearchClick}
      >
        <Select
          agents={uniqueAgents}
          labelName="Выберите оператора из списка"
          value={agent}
          onChange={handleAgentChange}
        />
      </FormSearch>
      {statisticData !== null ? (
        <StatisticInfo array={statisticData} title={titleStatistic} />
      ) : (
        <div className="statistic__agent">Ожидание информации по поиску...</div>
      )}
    </section>
  );
}

export default PageStatistic;
