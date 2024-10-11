import React from "react";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <form>
        <h1>DOT QUIZZ</h1>
        <input type="text" placeholder="Username" className="loginPage__input-username" />
        <input
          type="password"
          placeholder="Password"
          className="loginPage__input-password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
