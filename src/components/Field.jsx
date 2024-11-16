import Flower from "./svg/Flower";
import PropTypes from "prop-types";

function Field({ value, onChange }) {
  return (
    <div className="relative bg-[#006871] py-4 shadow-lg text-center">
      <Flower className="absolute top-0 left-0 w-16 h-16 text-green-600" />
      <Flower className="absolute bottom-0 right-0 w-16 h-16 text-yellow-600" />
      <h1 className="text-4xl font-semibold text-white mb-6">Translate App</h1>
      <label className="block text-white text-lg mb-2">Enter English</label>
      <input
        className="w-1/2 p-3 text-lg rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder="Type here"
      />
    </div>
  );
}

Field.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Field;
