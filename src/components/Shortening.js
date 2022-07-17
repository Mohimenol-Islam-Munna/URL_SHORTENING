import React, { useState } from "react";
import axios from "axios";

const Shortening = () => {
  const [linkState, setLinkState] = useState("");

  const shortenLinkHandler = (event) => {
    console.log("linkHandler ::", event.target.value);
    setLinkState(event.target.value);
  };

  const shortenApiHandler = async () => {
    console.log("shortenApiHandler ::");

    const data = {};
    data.url = linkState;

    console.log("data ::", data);

    try {
      let res = await axios.post("https://api.shrtco.de/v2/shorten", data, {
        headers: {
          "Content-type": "application/json",
        },
      });

      console.log("res ::", res);
    } catch (err) {
      console.log("err ::", err);
    }
  };

  return (
    <div>
      <div className="bg-[#35323E] p-8 rounded-md flex gap-3">
        <input
          className="p-3 border-3 border-red-600 rounded-lg flex-grow"
          type="text"
          name="link"
          value={linkState}
          onChange={(event) => shortenLinkHandler(event)}
          placeholder="Enter Your Link"
        />
        <button
          className="bg-[#2ACFCF] p-3 px-3 rounded-lg"
          onClick={shortenApiHandler}
        >
          Shorten It
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Shortening;
