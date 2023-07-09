import React, { useState } from "react";
import "./Header.scss";

export const Header = () => {
  const [logIn, setLogIn] = useState(false);

  const handleLogInClick = () => {
    setLogIn(!logIn);
  };

  return (
    <div className="header">
      <div className="header__logo">Delivery</div>

      {logIn ? (
        <div className="header__form">
          <form>
            <input type="text" placeholder="Username" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button type="submit" className="headerButton">
              Log in
            </button>
          </form>
        </div>
      ) : (
        <div className="header__button">
          <button className="headerButton" onClick={handleLogInClick}>
            Log in
          </button>
          <button className="headerButton">Register now</button>
        </div>
      )}
    </div>
  );
};
