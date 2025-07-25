import React from "react";

const Table = ({ columns, data, onRowClick }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        {/* Header */}
        <thead>
          <tr className="bg-blue-500 text-white">
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left text-sm font-normal"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
              onClick={() => onRowClick && onRowClick(row)}
              style={{ cursor: onRowClick ? "pointer" : "default" }}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200"
                  onClick={(e) => e.stopPropagation()} // Prevents row click when clicking on buttons
                >
                  {
                    // Render cell content directly if it's a JSX element, otherwise fallback to field lookup
                    typeof row[col] !== "undefined" ? row[col] :
                    row[col.toLowerCase().replace(/\s+/g, "")]
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
