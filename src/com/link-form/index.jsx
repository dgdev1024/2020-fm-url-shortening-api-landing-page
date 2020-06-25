/**
 * @file com/link-form/index.jsx
 */

import React, { useState } from "react";
import "./index.scss";

const LinkForm = ({ shortenLink, linkError }) => {
  const [input, setInput] = useState("");

  const onFormSubmit = async (ev) => {
    ev.preventDefault();
    const res = await shortenLink(input);
    if (res === true) {
      setInput("");
    }
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className={`link-form ${linkError && "link-form--error"}`}
    >
      <input
        type="text"
        className="link-form__input"
        aria-label="Enter a link to shorten."
        placeholder="Shorten a link here..."
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
      />
      {linkError !== "" && (
        <p className="text text--smaller text--align-left link-form__error">
          {linkError}
        </p>
      )}
      <button type="submit" className="button link-form__button">
        Shorten it!
      </button>
    </form>
  );
};

export default LinkForm;
