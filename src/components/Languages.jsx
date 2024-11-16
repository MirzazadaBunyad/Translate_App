import PropTypes from "prop-types";

function Languages({ language, onLanguageChange }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <label className="block text-gray-700 text-lg font-semibold mb-4">Select Language</label>
      <div className="grid grid-cols-2 gap-4">
        {LANGUAGES.map(({ label, value }) => (
          <div
            key={value}
            className={`cursor-pointer p-3 text-center rounded-md text-lg transition duration-200 ${language === value ? 'bg-[#5A7A7C] text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => onLanguageChange(value)}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

Languages.propTypes = {
  language: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};

const LANGUAGES = [
  { label: "Azerbaijani", value: "az" },
  { label: "Afrikaans", value: "af" },
  { label: "French", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" },
];

export default Languages;
