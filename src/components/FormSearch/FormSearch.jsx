import React from "react";
import Button from "../Button/Button";

import "./FormSearch.css";

const FormSearch = ({
  title,
  buttonTitleSearch,
  buttonSearchClassName,
  children,
  onSubmit,
}) => {
  return (
    <section className="form-search">
      <h2 className="title title__main title__margin_statistic">{title}</h2>
      <form
        className="form-search__container"
        method="POST"
        onSubmit={onSubmit}
        noValidate
      >
        <div className="form-search__input-block">
          {children}
        </div>
        <div className="form__button-block">
          <Button
              type="button"
              className={buttonSearchClassName}
              onClick={onSubmit}
            >
              {buttonTitleSearch}
            </Button>
        </div>
      </form>
    </section>
  );
};

export default FormSearch;
