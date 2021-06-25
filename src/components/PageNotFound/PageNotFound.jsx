import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../Logo/Logo";

import Button from "../Button/Button.jsx";
import "./PageNotFound.css";

function PageNotFound() {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <section className="nopage">
      <div className="nopage__container">
        <div className="nopage__block">
          <h2 className="title title__nopage text-size__xl">4</h2>
          <Logo className="logo__nopage rotation" />
          <h2 className="title title__nopage text-size__xl">4</h2>
        </div>
        <p className="paragraph paragraph__nopage text-size__s">
          Страница не найдена
        </p>
        <Button
          type="button"
          onClick={handleBack}
          className="button button__word button__word_border paragraph text-color__blue text-size_s"
        >
          Назад
        </Button>
      </div>
    </section>
  );
}

export default PageNotFound;
