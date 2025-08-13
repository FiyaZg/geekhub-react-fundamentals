import "./login.scss";
import logo from "@/assets/logo.png";
import { useState, useRef } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    username: "13800000002",
    password: "246810",
  });

  const [didEdit, setDidEdit] = useState({ username: false, password: false });

  let usernameIsInvalid =
    didEdit.username && !enteredValues.username.includes("@");

  const handleInputChange = (identifier, value) => {
    setEnteredValues({
      ...enteredValues,
      [identifier]: value,
    });

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };

  function handleBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (usernameIsInvalid) {
      return;
    }

    console.log(enteredValues);
    console.log("Sending HTTP request...");

    setEnteredValues({
      username: "",
      password: "",
    });
  };

  return (
    <div className="login">
      <img className="login-logo" src={logo}></img>
      <form onSubmit={handleSubmit}>
        <div className="control no-margin">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            onBlur={(e) => handleBlur("username", e.target.value)}
            onChange={(e) => handleInputChange("username", e.target.value)}
            value={enteredValues.username}
          />
          <div className="control-error">
            {usernameIsInvalid && <span>please input valid username</span>}
          </div>
        </div>
        <div className="control no-margin">
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="password"
            onBlur={(e) => handleBlur("password", e.target.value)}
            onChange={(e) => handleInputChange("password", e.target.value)}
            value={enteredValues.password}
          />
        </div>
        <div className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
