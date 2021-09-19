import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStatisticData, resetStatisticData } from "../../store/dataSlice";

import FormSearch from "../FormSearch/FormSearch";
import Loader from "../Loader/Loader";
import Select from "../Select/Select";
import StatisticInfo from "../StatisticInfo/StatisticInfo";

import "./PageStatistic.css";

function PageStatistic() {
  const dispatch = useDispatch();
  const { dataList, statisticData } = useSelector((state) => state.data);

  const [agent, setAgent] = useState("");
  const [titleStatistic, setTitleStatistic] = useState("");

  useEffect(() => {
    dispatch(resetStatisticData());
  }, []);

  // DEFINE AGENTS
  const resultAgents =
    dataList !== null ? dataList.map((item) => item[4]) : null;
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
    dispatch(setStatisticData(agent));
    setTitleStatistic(`Cтатистика по оператору : ${agent}`);
    setAgent("");
  }

  if (dataList === null) {
    return <Loader />;
  }
  return (
    <section className="statistic">
      <StatisticInfo array={dataList} title="Общая статистика" />
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
