import PropTypes from "prop-types";

const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="block w-full rounded-md border-0 px-3 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SearchInput;
