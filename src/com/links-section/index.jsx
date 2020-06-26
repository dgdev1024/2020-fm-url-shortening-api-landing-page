/**
 * @file com/links-section/index.jsx
 */

import React, { useState } from "react";
import Axios from "axios";
import { useLocalStorage } from "../../hooks/use-local-storage";
import LinkForm from "../link-form";
import ShortenedLink from "../shortened-link";
import "./index.scss";

const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const LinksSection = () => {
  const [shortLinks, setShortLinks] = useLocalStorage("-fm-link-hashids", []);
  const [copiedLinkId, setCopiedLinkId] = useState("");
  const [linkError, setLinkError] = useState("");

  const setLinkErrorMessage = (message = "") => {
    if (typeof message !== "string" || message === "") {
      setLinkError("");
      return true;
    } else {
      setLinkError(message);
      return false;
    }
  };

  const shortenLink = async (link) => {
    if (typeof link !== "string" || link === "") {
      return setLinkErrorMessage("Please add a link.");
    }

    if (urlRegex.test(link) === false) {
      return setLinkErrorMessage("Please add a valid link.");
    }

    try {
      const res = await Axios({
        method: "post",
        url: "https://rel.ink/api/links/",
        data: {
          url: link,
        },
      });

      const { hashid } = res.data;
      if (shortLinks.includes(hashid) === false) {
        setShortLinks([...shortLinks, hashid]);
      }

      return setLinkErrorMessage();
    } catch (err) {
      console.error(err);
      return setLinkErrorMessage("An error occured. Try again later.");
    }
  };

  return (
    <section className="section links" aria-label="Shorten Links">
      <div className="container links__container">
        <LinkForm shortenLink={shortenLink} linkError={linkError} />
        {shortLinks.length === 0 && (
          <p className="text links__empty">
            Your shortened links will appear here.
          </p>
        )}
        {shortLinks.map((linkId, index) => (
          <ShortenedLink
            key={index}
            hashId={linkId}
            setCopiedLinkId={setCopiedLinkId}
            copyState={copiedLinkId === linkId}
          />
        ))}
      </div>
    </section>
  );
};

export default LinksSection;
