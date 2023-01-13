import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Icon, Input } from "@app/components/atoms";
import loginImg from "../../assets/images/pablo-sign-in 1.svg";

export const Login = () => {
  const navigation = useNavigate();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigation("./users");
  };
  return (
    <section className="login">
      <div className="login__logo">
        <Icon name="logo" />
      </div>
      <div className="login__wrapper">
        <div className="image--wrapper">
          <img src={loginImg} alt="" className="login__img" />
        </div>

        <form className="login__form" onSubmit={handleFormSubmit}>
          <div className="login__form--header">
            <h2 className="login__form--title">Welcome!</h2>
            <p className="login__form--subtitle">Enter details to login.</p>
          </div>
          <div className="login__form--control">
            <Input placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </div>
          <p className="forgot--password ">Forgot Password?</p>
          <div className="form__btn--wrapper">
            <Button text="Log in" />
          </div>
        </form>
      </div>
    </section>
  );
};
