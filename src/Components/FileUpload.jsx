import { useState } from "react";
import PropTypes from "prop-types";
import Papa from "papaparse";

const FileUpload = ({ onFileUpload }) => {
  const [error, setError] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file && file.type === "text/csv") {
      setError(null);
      Papa.parse(file, {
        complete: (result) => {
          onFileUpload(result.data);
        },
        header: true,
      });
    } else {
      setError("Please upload a valid CSV file.");
    }
  };

  return (
    <div className="my-4">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

FileUpload.propTypes = {
  onFileUpload: PropTypes.func.isRequired,
};

export default FileUpload;
