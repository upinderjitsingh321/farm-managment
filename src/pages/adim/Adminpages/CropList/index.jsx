import { useEffect, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import axios from "axios";
import { USER } from "../../../../config/endpoints";

function AdminCropList() {
  const [cropdata, setCropData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const access_token = localStorage.getItem("access_token");

  const handleData = async () => {
    try {
      const result = await axios.get(USER.CHEMICALS_LIST, {
        headers: { access_token },
        params: {
          page: currentPage,
          limit: rowsPerPage,
          search: searchTerm
        },
      });

      const response = result?.data?.data;
      setCropData(response?.crop || []); // assuming 'crop' holds the list
      setTotalCount(response?.totalCropItems || 0); // use correct key
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  const onPageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(totalCount / rowsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    handleData();
  }, [currentPage, rowsPerPage, searchTerm]);

  return (
    <div className="p-4">
      <div className="d-flex gap-2 justify-content-between align-items-center">
        <div className="d-flex gap-2 align-items-center">
          <p className="m-0">Show</p>
          <input
            type="number"
            min="1"
            style={{ height: "25px", width: "50px" }}
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page
            }}
          />
        </div>
        <div className="d-flex gap-2">
          <label>Search</label>
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <table className="w-100 border-collapse border border-gray-300 mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
         
            <th className="border border-gray-300 p-2">Crop</th>
            <th className="border border-gray-300 p-2">Variety</th>
            <th className="border border-gray-300 p-2">Area</th>
            <th className="border border-gray-300 p-2">Expected Yield</th>
            <th className="border border-gray-300 p-2">Price</th>
            {/* <th className="border border-gray-300 p-2">Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {cropdata.map((record) => (
            <tr key={record.id} className="border border-gray-300">
              <td className="border border-gray-300 p-2">{record.id}</td>
            
              <td className="border border-gray-300 p-2">{record.crop}</td>
              <td className="border border-gray-300 p-2">{record.variety}</td>
              <td className="border border-gray-300 p-2">{record.acre}</td>
              <td className="border border-gray-300 p-2">{record.production}</td>
              <td className="border border-gray-300 p-2">{record.price}</td>
              {/* <td className="border border-gray-300 p-2 text-center">
                <Link className="me-2 text-success" to="#">
                  <EditIcon />
                </Link>
                <Link className="text-danger" to="#">
                  <DeleteForeverIcon />
                </Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(totalCount / rowsPerPage)} — Total Records: {totalCount}
        </div>
        <div>
          <button
            className="btn btn-sm btn-outline-secondary me-2"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            disabled={currentPage === Math.ceil(totalCount / rowsPerPage)}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminCropList;
