import React from "react";

import "./Input.css";

const Input = ({
  labelName,
  inputName,
  type,
  onChange,
  value,
  errors,
  min,
  formDisabled,
}) => {
  return (
    <>
      <label className="paragraph paragraph__label paragraph__color_grey">
        {labelName}
      </label>
      <input
        type={type}
        name={inputName}
        id={inputName}
        className="input"
        onChange={onChange}
        value={value || ""}
        disabled={formDisabled}
        minLength={min}
        required
      />
      <p className="input__error">{errors}</p>
    </>
  );
};

export default Input;
