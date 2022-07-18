import React, { useState, useEffect } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Shortening = () => {
  const [inputLink, setInputLink] = useState("");
  const [inputError, setInputError] = useState({ status: false, message: "" });
  const [multipleShortLink, setMultipleShortLink] = useState([]);

  const inputLinkHandler = (event) => {
    setInputLink(event.target.value);
  };

  const createShortenLinkHandler = async () => {
    if (inputLink === "") {
      setInputError({
        ...inputError,
        status: true,
        message: "Please Enter Valid Url",
      });
    } else {
      try {
        let res = await axios.get("https://api.shrtco.de/v2/shorten", {
          params: {
            url: inputLink,
          },

          headers: {
            "Content-type": "application/json",
          },
        });

        setMultipleShortLink([...multipleShortLink, res?.data?.result]);
        setInputLink("");
        setInputError({
          ...inputError,
          status: false,
          message: "",
        });
      } catch (err) {
        setInputError({
          ...inputError,
          status: true,
          message: "Please Enter Valid Url or Check Your Internet Connection",
        });
      }
    }
  };

  useEffect(() => {
    if (multipleShortLink.length === 0) {
      if (localStorage.multipleShortLink) {
        setMultipleShortLink(
          JSON.parse(localStorage.getItem("multipleShortLink"))
        );
      } else {
        setMultipleShortLink([]);
      }
    }
  }, []);

  useEffect(() => {
    if (multipleShortLink.length > 0) {
      localStorage.setItem(
        "multipleShortLink",
        JSON.stringify(multipleShortLink)
      );
    }
  }, [multipleShortLink]);

  return (
    <>
      <div className="bg-[#35323E] p-8">
        <div className="rounded-md flex gap-3">
          <input
            className="p-3 border-3 border-red-600 rounded-lg flex-grow"
            type="text"
            name="link"
            value={inputLink}
            onChange={(event) => inputLinkHandler(event)}
            placeholder="Enter Your Link"
          />
          <button
            className="bg-[#2ACFCF] p-3 px-3 rounded-lg"
            onClick={createShortenLinkHandler}
          >
            Shorten It
          </button>
        </div>
        <div>
          {inputError.status && (
            <p className="text-red-400 mt-2">{inputError.message}</p>
          )}
        </div>
      </div>
      <div className="mt-5">
        {multipleShortLink.length > 0
          ? multipleShortLink.map((link, index) => (
              <div key={index} className="bg-gray-300 p-8 mt-2 flex ">
                <p className="flex-grow">{link.short_link}</p>
                <CopyToClipboard text={link.short_link}>
                  <button className="text-red-500 border-2 p-2">
                    click to copy
                  </button>
                </CopyToClipboard>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default Shortening;
