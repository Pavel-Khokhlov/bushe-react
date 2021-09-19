import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  logoutApp,
} from "../../store/appSlice";
import Input from "../Input/Input";
import Form from "../Form/Form";
import { useFormWithValidation } from "../Hooks/useForm";

import "./PageProfile.css";
import { removeCurrentUser, setCurrentUser } from "../../store/userSlice";
import { setDataList } from "../../store/dataSlice";

function PageProfile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { values, errors, isValid, handleChange, resetFormCurrentUser } =
    useFormWithValidation();

    useEffect(() => {
      resetFormCurrentUser();
    }, [resetFormCurrentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setCurrentUser(values));
    localStorage.setItem("currentUser", JSON.stringify(values));
  }

  function handleLogout() {
    dispatch(removeCurrentUser());
    dispatch(logoutApp());
    dispatch(setDataList([]));
    history.push("/");
  }

  const buttonEditClassName = `button button__word ${
    isValid ? "" : "button__word_inactive"
  }`;

  return (
    <section className="profile">
      <Form
        title="Редактировать профиль"
        buttonTitleEdit="Редактировать"
        buttonTitleExit="Выйти"
        buttonEditClassName={buttonEditClassName}
        buttonExitClassName="button button__main button__main_active"
        onSignOut={handleLogout}
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
