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
    <div className="bg-white overflow-auto">
      <div className="overflow-x-auto min-h-[67vh]">
        <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 border-b"></th>
              {Object.keys(data[0]).map((col, index) => (
                <th
                  key={index}
                  className={`px-4 py-4 text-left text-sm font-medium text-gray-700 border-b cursor-pointer ${
                    selectedColumns[index] ? "bg-violet-200" : ""
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
                    ? "bg-violet-100"
                    : "bg-white"
                } hover:bg-gray-50 transition-colors`}
              >
                <td className="px-4 py-3 border-b">
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
                      selectedColumns[index] ? "bg-violet-100" : ""
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
        containerClassName={"flex justify-center items-center my-4"}
        previousClassName={"text-gray-500 mr-2"}
        nextClassName={"text-gray-500 ml-2"}
        pageClassName={"mx-1"}
        pageLinkClassName={
          "flex items-center justify-center h-full py-2 px-4 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 "
        }
        activeClassName={
          "bg-violet-100 h-full flex items-center justify-center rounded-md"
        }
        activeLinkClassName={
          "font-bold text-violet-700 w-full h-full flex items-center justify-center"
        }
        breakClassName={"mx-1"}
        breakLinkClassName={
          "py-2 px-4 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
        }
      />
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataTable;
