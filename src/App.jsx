import { useState } from "react";
import FileUpload from "./Components/FileUpload";
import DataTable from "./Components/DataTable";
import SearchInput from "./Components/SearchInput";
import SelectDropdown from "./Components/SelectDropdown";

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleFileUpload = (uploadedData) => {
    setData(uploadedData);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const filteredData = data
    .filter((row) =>
      searchQuery
        ? Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchQuery.toLowerCase())
          )
        : true
    )
    .filter((row) =>
      filterType
        ? String(row.Type).trim().toLowerCase() === filterType.toLowerCase()
        : true
    );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-extrabold mb-4 pb-4 font-sans text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 uppercase tracking-wide border-b-2">
        CSV Upload and Table Display
      </h1>

      <FileUpload onFileUpload={handleFileUpload} />

      {data.length > 0 && (
        <div className="my-4 flex items-center gap-4">
          <SearchInput
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search"
            className="flex-grow"
          />

          <SelectDropdown
            name="fuelType"
            value={filterType}
            onChange={handleTypeChange}
            options={[
              { value: "", label: "All" },
              { value: "petrol", label: "Petrol" },
              { value: "diesel", label: "Diesel" },
            ]}
            label="Filter by Type"
            className="w-32" // Adjust this value as needed
          />
        </div>
      )}

      <DataTable data={filteredData} />
    </div>
  );
}

export default App;
