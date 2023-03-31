import React from "react";
import "./register.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import { signInAccount } from "../../redux/reducers/user";

const Register = () => {
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
      .post("http://localhost:8080/register", data)
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
    <div className="register">
      <div className="register__card">
        <h2 className="register__title">Create your Qpick ID</h2>
        <Link
          className="register__link"
          to={"/login"}
        >
          Already have Qpick ID?
        </Link>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="register__form"
          noValidate
        >
          <label
            htmlFor=""
            className="register__label"
          >
            <TextField
              {...register("email", {
                required: {
                  message: "Enter your email",
                  value: true,
                },
                minLength: {
                  message: "At least 10 letters",
                  value: 10,
                },
                pattern: {
                  message: "Type your email correct",
                  value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                },
              })}
              placeholder="Enter your Email"
              className="email"
              id="standard-basic"
              label="Email"
              variant="outlined"
            />
            <p className="register__error">
              {errors.email && errors.email.message}
            </p>
          </label>

          <label
            htmlFor=""
            className="register__label"
          >
            <TextField
              {...register("login", {
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
              label="Login"
              variant="outlined"
            />
            <p className="register__error">
              {errors.login && errors.login.message}
            </p>
          </label>

          <label
            htmlFor=""
            className="register__label"
          >
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
              placeholder="Enter your password"
              className="password"
              id="standard-basic"
              label="Password"
              variant="outlined"
              type="password"
            />
            <p className="register__error">
              {errors.password && errors.password.message}
            </p>
          </label>

          <label
            htmlFor=""
            className="register__label"
          >
            <TextField
              {...register("passwordAgain", {
                required: {
                  message: "Repeat password",
                  value: true,
                },
                validate: (v) => {
                  if (getValues("password") !== v) {
                    return "Your passwords do no match";
                  }
                },
              })}
              placeholder="Correct your password"
              className="password"
              id="standard-basic"
              label="Correct password"
              variant="outlined"
              type="password"
            />
            <p className="register__error">
              {errors.passwordAgain && errors.passwordAgain.message}
            </p>
          </label>

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

export default Register;
