import { useState } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

const DataTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 10;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * rowsPerPage;
  const displayedData = data.slice(startIndex, startIndex + rowsPerPage);

  const [selectedRows, setSelectedRows] = useState({});
  const [selectedColumns, setSelectedColumns] = useState({});

  const handleRowSelect = (rowIndex) => {
    setSelectedRows((prev) => ({
      ...prev,
      [rowIndex]: !prev[rowIndex],
    }));
  };

  const handleColumnSelect = (columnIndex) => {
    setSelectedColumns((prev) => ({
      ...prev,
      [columnIndex]: !prev[columnIndex],
    }));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg overflow-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 border-b"></th>
              {Object.keys(data[0]).map((col, index) => (
                <th
                  key={index}
                  className={`px-4 py-2 text-left text-sm font-medium text-gray-700 border-b cursor-pointer ${
                    selectedColumns[index] ? "bg-blue-100" : ""
                  }`}
                  onClick={() => handleColumnSelect(index)}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${
                  selectedRows[rowIndex + startIndex]
                    ? "bg-gray-100"
                    : "bg-white"
                } hover:bg-gray-50 transition-colors`}
              >
                <td className="px-4 py-2 border-b">
                  <input
                    type="checkbox"
                    checked={!!selectedRows[rowIndex + startIndex]}
                    onChange={() => handleRowSelect(rowIndex + startIndex)}
                  />
                </td>
                {Object.values(row).map((cell, index) => (
                  <td
                    key={index}
                    className={`px-4 py-2 border-b text-sm ${
                      selectedColumns[index] ? "bg-blue-50" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={Math.ceil(data.length / rowsPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex justify-center mt-4"}
        activeClassName={"active"}
        pageClassName="mx-1"
        activeLinkClassName="font-bold text-blue-600"
        previousClassName="text-blue-600 hover:underline"
        nextClassName="text-blue-600 hover:underline"
      />
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataTable;
