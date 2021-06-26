import React, { useEffect } from "react";
import Input from "../Input/Input";
import Form from "../Form/Form";
import { useFormWithValidation } from "../Hooks/useForm";

import "./PageLogin.css";

function PageLogin({ isLoggedIn, onSignIn }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onSignIn(values.email, values.password);
  }

  const buttonLoginClassName = `button button__main ${
    isValid ? "button__main_active" : "button__main_inactive"
  }`;

  return (
    <section className="login">
      <Form
        isLoggedIn={isLoggedIn}
        title="Добро пожаловать!"
        buttonTitleLogin="ВОЙТИ"
        buttonLoginClassName={buttonLoginClassName}
        isFormValid={isValid}
        onSubmit={handleSubmit}
      >
        <Input
          labelName="E-mail"
          type="email"
          inputName="email"
          inputClassName="input"
          errorClassName="input__error"
          onChange={handleChange}
          value={values.email || ""}
          errors={errors.email}
        />
        <Input
          labelName="Пароль"
          type="password"
          inputName="password"
          inputClassName="input"
          errorClassName="input__error"
          onChange={handleChange}
          value={values.password || ""}
          min="8"
          errors={errors.password}
        />
      </Form>
    </section>
  );
}

export default PageLogin;
