import React from "react";

import './Select.css';

const Select = ({
  agents,
  labelName,
  selectName,
  value,
  onChange,
}) => {
  return (
    <label className="paragraph paragraph__label paragraph__color_grey">
        {labelName}
        <select
          id={selectName}
          name={selectName}
          className="select"
          value={value || ""}
          onChange={onChange}
        >
          <option value=""></option>
        {agents
          .map((item) => {
            return (
              <option key={item} value={item}>{item}</option>
            );
          })}
        </select>
      </label>
  );
};

export default Select;
