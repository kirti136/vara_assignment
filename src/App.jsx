import { useState } from "react";
import FileUpload from "./Components/FileUpload";
import DataTable from "./Components/DataTable";

function App() {
  const [data, setData] = useState([]);

  const handleFileUpload = (uploadedData) => {
    setData(uploadedData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CSV Upload and Table Display</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {data.length > 0 && <DataTable data={data} />}
    </div>
  );
}

export default App;
