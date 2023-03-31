import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./login.scss";
import axios from "axios";
import { signInAccount } from "../../redux/reducers/user";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/login", data)
      .then((resolve) => {
        dispatch(
          signInAccount({
            ...resolve.data.user,
            token: resolve.data.accessToken,
          })
        );
        navigate("/");
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...resolve.data.user,
            token: resolve.data.accessToken,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div className="login__card">
        <h2 className="login__title">Enter your Qpick ID information </h2>
        <Link
          className="login__link"
          to={"/register"}
        >
          Back to Register
        </Link>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="login__form"
          noValidate
        >
          <TextField
            {...register("email", {
              required: {
                message: "Enter a login",
                value: true,
              },
              minLength: {
                message: "Minimum length 3 characters",
                value: 3,
              },
            })}
            placeholder="Enter your Login"
            className="login"
            id="standard-basic"
            label="Email"
            variant="outlined"
            type="email"
          />
          <p className="register__error">
            {errors.login && errors.login.message}
          </p>

          <TextField
            {...register("password", {
              required: {
                message: "Enter a password",
                value: true,
              },
              maxLength: {
                message: "Maximum length 20 characters",
                value: 20,
              },
              minLength: {
                message: "Minimum length 8 characters",
                value: 8,
              },
              pattern: {
                message: "Enter your password correctly",
                value: /(?=.*[0-9])(?=.*[a-z]){6,}/g,
              },
            })}
            placeholder="Enter your Password"
            className="password"
            id="standard-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
          <p className="register__error">
            {errors.password && errors.password.message}
          </p>

          <Button
            type={"submit"}
            className="button"
            variant="contained"
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
