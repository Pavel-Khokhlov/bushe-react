import React, { useState, useEffect } from "react";
import FormSearch from "../FormSearch/FormSearch";
import Select from "../Select/Select";

import "./PageStatistic.css";
import StatisticInfo from "../StatisticInfo/StatisticInfo";

function PageStatistic({ statisticData, setStatisticData, onSearch }) {
  const data = JSON.parse(localStorage.getItem("dataList"));
  const [agent, setAgent] = useState("");

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
        <StatisticInfo array={statisticData} title={`Cтатистика по оператору ${agent}`} />
      ) : (
        <div className="statistic__agent">Ожидание информации по поиску...</div>
      )}
    </section>
  );
}

export default PageStatistic;
