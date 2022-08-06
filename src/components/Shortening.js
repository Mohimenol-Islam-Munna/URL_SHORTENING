import React, { useState, useEffect } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Shortening = () => {
  const [inputLink, setInputLink] = useState("");
  const [inputError, setInputError] = useState({ status: false, message: "" });
  const [multipleShortLink, setMultipleShortLink] = useState([]);
  const [checkCopy, setCheckCopy] = useState([{ id: 0, copied: false }]);

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

  useEffect(() => {
    let targetElement = document.getElementById("inputElement");
  }, []);

  return (
    <>
      <div id="inputElement" className="border border-transparent">
        <div
          className={`w-full bg-[#35323E] p-8 rounded-lg -mt-[85px] sm:-mt-[56px]`}
        >
          <div className="rounded-md flex flex-col sm:flex-row gap-3">
            <div className="flex-grow">
              <input
                className="w-full p-3 border-3 border-red-600 rounded-lg"
                type="text"
                name="link"
                value={inputLink}
                onChange={(event) => inputLinkHandler(event)}
                placeholder="Enter Your Link"
              />
              <div>
                {inputError.status && (
                  <p className="text-red-400 mt-2">{inputError.message}</p>
                )}
              </div>
            </div>
            <div>
              <button
                className="w-full bg-[#2ACFCF] p-3 px-3 rounded-lg text-white"
                onClick={createShortenLinkHandler}
              >
                Shorten It
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {multipleShortLink.length > 0
          ? multipleShortLink.map((link, index) => (
              <div
                key={index}
                className="bg-white p-4 mt-2 flex flex-col sm:flex-row rounded-lg items-center box-border"
              >
                <p className="flex-grow"> {link?.original_link}</p>

                <p className="text-[#2ACFCF] mr-5 ">{link?.short_link}</p>

                <CopyToClipboard
                  text={link.short_link}
                  onCopy={() => setCheckCopy({ id: index, copied: true })}
                >
                  <button
                    className={`text-white  py-1 px-3 rounded-lg ${
                      checkCopy.id === index && checkCopy.copied
                        ? "bg-[#35323E]"
                        : "bg-[#2ACFCF]"
                    }`}
                  >
                    {checkCopy.id === index && checkCopy.copied
                      ? "copied"
                      : "copy"}
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
