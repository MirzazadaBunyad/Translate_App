import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function Translate({ language, text }) {
  const [translated] = useTranslation(text, language);

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl mt-8">
      <label className="block text-gray-700 text-lg font-semibold mb-2">Output</label>
      <h1 className="text-2xl font-semibold text-[#006871]">{translated.replace("&#39;", "'")}</h1>
    </div>
  );
}

Translate.propTypes = {
  language: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const useTranslation = (text, language) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text) return;

    const cancelToken = axios.CancelToken.source();
    doTranslation(text, language, cancelToken, setTranslated);

    return () => cancelToken.cancel();
  }, [text, language]);

  return [translated];
};

const debounce = (fn, delay = 300) => {
  let timeoutId;

  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

const doTranslation = debounce(
  async (text, language, cancelToken, callback) => {
    if (!text) {
      callback("Please enter text to translate.");
      return;
    }

    try {
      const response = await axios.get(
        `https://lingva.ml/api/v1/en/${language}/${encodeURIComponent(text)}`,
        { cancelToken: cancelToken.token }
      );

      callback(response.data.translation);
    } catch (error) {
      console.error("Translation failed:", error.message);
      callback("Translation failed. Please try again later.");
    }
  }
);

export default Translate;
