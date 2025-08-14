import "./login.scss";
import logo from "@/assets/logo.png";
import { useState, useRef, useEffect } from "react";
import { fetchLogin, setToken, fetchUserInfo } from "@/store/modules/user";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { message } from "antd";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

  let email = useRef(null);
  let password = useRef(null);

  const [enteredValues, setEnteredValues] = useState({
    username: "13800000002",
    password: "246810",
  });

  const handleInputChange = (identifier, value) => {
    setEnteredValues({
      ...enteredValues,
      [identifier]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const emailIsValid = email.current.value.includes("@");
    // if (!emailIsValid) {
    //   setEmailIsInvalid(true);
    //   return;
    // }
    // setEmailIsInvalid(false);

    const passwordIsValid = password.current.value.length >= 6;
    if (!passwordIsValid) {
      setPasswordIsInvalid(true);
      return;
    }
    setPasswordIsInvalid(false);

    try {
      await dispatch(
        fetchLogin({
          mobile: email.current.value,
          code: password.current.value,
        })
      );
      message.success("登录成功！");
      navigate(from, { replace: true });
    } catch (err) {
      message.error(getErrMsg(err));
    }
  };

  // 可选：把后端返回/axios错误解析成人话
  function getErrMsg(err) {
    if (err?.response?.data?.message) return err.response.data.message;
    if (typeof err === "string") return err;
    return "登录失败，请检查账号或密码";
  }

  return (
    <div className="login">
      <img className="login-logo" src={logo}></img>
      <form onSubmit={handleSubmit}>
        <div className="control no-margin">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            ref={email}
            onChange={(e) => handleInputChange("username", e.target.value)}
            value={enteredValues.username}
          />
          <div className="control-error">
            {emailIsInvalid && <span>please input valid username</span>}
          </div>
        </div>
        <div className="control no-margin">
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="password"
            ref={password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            value={enteredValues.password}
          />
          <div className="control-error">
            {passwordIsInvalid && <span>please input valid password</span>}
          </div>
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
