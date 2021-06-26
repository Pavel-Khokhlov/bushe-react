import React, { useEffect } from "react";
import Input from "../Input/Input";
import Form from "../Form/Form";
import { useFormWithValidation } from "../Hooks/useForm";

import "./PageProfile.css";

function PageProfile({ isLoggedIn, onEditProfile, onSignOut }) {
  const { values, errors, isValid, handleChange, resetFormCurrentUser } =
    useFormWithValidation();

    useEffect(() => {
      resetFormCurrentUser();
    }, [resetFormCurrentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onEditProfile(values.email, values.password);
  }

  function handleSignOut(e) {
    e.preventDefault();
    onSignOut();
  }

  const buttonEditClassName = `button button__word ${
    isValid ? "" : "button__word_inactive"
  }`;

  return (
    <section className="profile">
      <Form
        isLoggedIn={isLoggedIn}
        title="Редактировать профиль"
        buttonTitleEdit="Редактировать"
        buttonTitleExit="Выйти"
        buttonEditClassName={buttonEditClassName}
        buttonExitClassName="button button__main button__main_active"
        onSignOut={handleSignOut}
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

export default PageProfile;
