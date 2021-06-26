import React from "react";
import Button from "../Button/Button";

import "./Form.css";

const Form = ({
  isLoggedIn,
  title,
  buttonTitleLogin,
  buttonTitleEdit,
  buttonTitleExit,
  buttonLoginClassName,
  buttonEditClassName,
  buttonExitClassName,
  children,
  isFormValid,
  onSubmit,
  onSignOut,
}) => {
  return (
    <section className="form">
      <form
        className="form__container"
        method="POST"
        onSubmit={onSubmit}
        noValidate
      >
        <div className="form__input-block">
          <h3 className="title title__login text-size__m">{title}</h3>
          {children}
        </div>
        <div className="form__button-block">
          {!isLoggedIn ? (
            <Button
              type="submit"
              className={buttonLoginClassName}
              disabled={!isFormValid}
            >
              {buttonTitleLogin}
            </Button>
          ) : (
            ""
          )}
          {isLoggedIn && (
            <Button
              type="submit"
              className={buttonEditClassName}
              disabled={!isFormValid}
            >
              {buttonTitleEdit}
            </Button>
          )}
          {isLoggedIn && (
            <Button
              type="button"
              className={buttonExitClassName}
              onClick={onSignOut}
            >
              {buttonTitleExit}
            </Button>
          )}
        </div>
      </form>
    </section>
  );
};

export default Form;
