// import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import "../login/login.css";
import background from "./img/background.jpeg";

const User = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    }
  };

  const registerUser = async () => {
    const request = await fetch("http://127.0.0.1:4400/signup", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify({
        name,
        username,
        password,
      }),
    });
    const result = await request.json();
    console.log(result);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <>
      <Outlet />
      <div
        className="background"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="box-center">
          <h1 className="login-txt">Sign In</h1>
        </div>
        <main>
          <form className="input-center" onSubmit={onSubmit}>
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={onChange}
            />
            <label htmlFor="username"></label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={onChange}
            />
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
            <button className="login-btn">
              <Link
                to="/books"
                style={{ textDecoration: "none", color: "#495057" }}
              >
                Create Account
              </Link>
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default User;
