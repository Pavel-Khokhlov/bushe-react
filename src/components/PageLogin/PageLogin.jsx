import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/userSlice";

import { useFormWithValidation } from "../Hooks/useForm";

import Input from "../Input/Input";
import Form from "../Form/Form";

import "./PageLogin.css";
import { loginApp } from "../../store/appSlice";

function PageLogin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.app);

  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setCurrentUser(values));
    dispatch(loginApp());
    history.push("/data-list");
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
