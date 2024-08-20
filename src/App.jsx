import { useState } from "react";
import FileUpload from "./Components/FileUpload";
import DataTable from "./Components/DataTable";

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFileUpload = (uploadedData) => {
    setData(uploadedData);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = searchQuery
    ? data.filter((row) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : data;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-extrabold mb-4 pb-4 font-sans text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 uppercase tracking-wide border-b-2">
        CSV Upload and Table Display
      </h1>

      <FileUpload onFileUpload={handleFileUpload} />

      {data.length > 0 && (
        <div className="my-4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="block w-full text-sm p-2 border rounded-md mb-4 outline-none"
          />
          <DataTable data={filteredData} />
        </div>
      )}
    </div>
  );
}

export default App;
