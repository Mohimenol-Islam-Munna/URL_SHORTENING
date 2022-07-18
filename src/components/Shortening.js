import React, { useState } from "react";
import axios from "axios";

const Shortening = () => {
  const [inputLink, setInputLink] = useState("");
  const [inputError, setInputError] = useState({ status: false, message: "" });
  const [shortLink, setShortLink] = useState({});
  const [multipleShortLink, setMultipleShortLink] = useState([]);

  console.log("shortLink :go:", shortLink);
  console.log("multipleShortLink :goo:", multipleShortLink);

  const inputLinkHandler = (event) => {
    setInputLink(event.target.value);
  };

  const createShortenLinkHandler = async () => {
    console.log("shortenApiHandler :go:");

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

        setShortLink(res?.data?.result);
        setMultipleShortLink([...multipleShortLink, res?.data?.result]);
        setInputLink("");
        setInputError({
          ...inputError,
          status: false,
          message: "",
        });
      } catch (err) {
        console.log("err ::", err);
      }
    }
  };

  return (
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
  );
};

export default Shortening;
