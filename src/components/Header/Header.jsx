import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";

export const Header = () => {
  const [logIn, setLogIn] = useState(false);
  const [registrForm, setRegistrForm] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setLogIn(false);
        setRegistrForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogInClick = () => {
    setLogIn(!logIn);
    setRegistrForm(false);
  };

  const handleRegistrFormClick = () => {
    setRegistrForm(!registrForm);
    setLogIn(false);
  };

  return (
    <div className="header">
      <div className="header__logo">Delivery</div>

      <div className="header__button">
        <button className="headerButton" onClick={handleLogInClick}>
          Log in
        </button>
        <button className="headerButton" onClick={handleRegistrFormClick}>
          Register now
        </button>
      </div>

      {logIn && (
        <div className="header__form" ref={formRef}>
          <form>
            <input type="text" placeholder="Username" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button type="submit" className="headerButton">
              Log in
            </button>
          </form>
        </div>
      )}

      {registrForm && (
        <div className="header__form" ref={formRef}>
          <RegistrationForm />
        </div>
      )}
    </div>
  );
};
