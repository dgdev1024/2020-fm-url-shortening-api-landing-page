/**
 * @file com/shortened-link/index.jsx
 */

import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./index.scss";

const ShortenedLink = ({ hashId, copyState, setCopiedLinkId }) => {
  const [resolvedLink, setResolvedLink] = useState("");
  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    const resolveHash = async () => {
      try {
        const res = await Axios({
          method: "get",
          url: `https://rel.ink/api/links/${hashId}`,
        });

        const { url } = res.data;
        setResolvedLink(url);
      } catch (err) {
        console.error(`Error resolving hash ${hashId}: ${err}`);
        setErrorState(true);
      }
    };

    resolveHash();
  }, [hashId]);

  const copyShortenedLink = async () => {
    if (resolvedLink !== "") {
      await navigator.clipboard.writeText(`https://rel.ink/${hashId}`);
      setCopiedLinkId(hashId);
    }
  };

  if (errorState === true) {
    return (
      <div className="shortened-link">
        <p className="text text--small shortened-link__error">
          Unable to resolve link...
        </p>
      </div>
    );
  }

  if (resolvedLink === "") {
    return (
      <div className="shortened-link">
        <p className="text shortened-link__resolving">Resolving link...</p>
      </div>
    );
  }

  return (
    <div className="shortened-link">
      <a
        href={resolvedLink}
        target="_blank"
        className="shortened-link__resolved"
      >
        {resolvedLink}
      </a>
      <a
        href={`https://rel.ink/${hashId}`}
        target="_blank"
        className="shortened-link__shortened"
      >
        https://rel.ink/{hashId}
      </a>
      <button
        className={`button button--copy shortened-link__button ${
          copyState && "shortened-link__button--copied"
        }`}
        onClick={copyShortenedLink}
      >
        {copyState ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default ShortenedLink;
