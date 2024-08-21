import PropTypes from "prop-types";

const SelectDropdown = ({ name, value, onChange, options, label }) => {
  return (
    <div className="relative">
      {label && (
        <label
          htmlFor={name}
          className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="block rounded-md border-0 px-3 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 appearance-none"
        style={{ width: "10rem" }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* Dropdown arrow */}
      <svg
        className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none h-4 w-4 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

SelectDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string,
};

export default SelectDropdown;
