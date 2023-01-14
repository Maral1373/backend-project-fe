// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import "./login.css";
import books from "./img/books20.jpeg";

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
    const request = await fetch("http://127.0.0.1:4400/users", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
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
      <div
        className="background"
        style={{
          backgroundImage: `url(${books})`,
        }}
      >
        <div className="box-center">
          <h1 className="login">sign or log In</h1>
        </div>
        <div className="container-btn">
          {/* <button
          className="btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Login
        </button> */}
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
            <input className="register button" type="submit" value="Register" />
          </form>
        </main>
      </div>
    </>
  );
};

export default User;
