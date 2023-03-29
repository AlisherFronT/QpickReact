import React from "react";
import "./contacts.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Contacts = () => {
  return (
    <section className="contacts">
      <h2 className="contacts__title">Contact Us</h2>
      <p className="contacts__subtitle">
        We love hearing from you, our Shop customers. Please contact us and we
        will make sure to get back to you as soon as we possibly can.
      </p>
      <div className="contacts__container">
        <div className="container__left">
          <form className="contacts__form">
            <div className="double">
              <label>
                <TextField
                  className="contacts__input"
                  placeholder="Name"
                />
              </label>
              <label>
                <TextField
                  className="contacts__input"
                  placeholder="Surname"
                />
              </label>
            </div>
            <label>
              <TextField
                className="contacts__input"
                placeholder="Phone Number"
              />
            </label>
            <textarea
              className="contacts__text"
              placeholder="Type your text here"
            />
            <Button
              className="contacts__form-btn"
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
