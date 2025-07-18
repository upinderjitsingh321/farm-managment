import { useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import "./style.css";
import UserPersonalDetails from "../../../../component/Models/Forms/UserPersonalDetails";
import { USER } from "../../../../config/endpoints";
import axios from "axios";
import { Button } from "react-bootstrap";

function FarmerList() {
  const [farmerList, setFarmerList] = useState([]);
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
          search: searchTerm,
        },
      });

      const response = result?.data?.data;
      setFarmerList(response?.farmer || []);
      setTotalCount(response?.totalFarmers || 0);
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
      <div className="d-flex gap-2 justify-content-between align-items-center mb-3">
        <div className="d-flex gap-2 align-items-center">
          <p className="m-0">Show</p>
          <input
            type="number"
            style={{ height: "30px", width: "60px" }}
            min={1}
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page when changing rows
            }}
          />
        </div>
        <div className="d-flex gap-2">
          <label>Search</label>
          <input
            type="search"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page when searching
            }}
          />
        </div>
        {/* <UserPersonalDetails /> */}
      </div>

      <table className="w-100 border-collapse border border-gray-300 mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Phone</th>
            <th className="border border-gray-300 p-2">Address</th>
            <th className="border border-gray-300 p-2">Registration Date</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmerList.length > 0 ? (
            farmerList.map((record) => (
              <tr key={record.id} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{record.id}</td>
                <td className="border border-gray-300 p-2">
                  {record?.users_detail?.name}
                </td>
                <td className="border border-gray-300 p-2">{record.email}</td>
                <td className="border border-gray-300 p-2">
                  {record?.users_detail?.number}
                </td>
                <td className="border border-gray-300 p-2">
                  {record?.useraddress?.address || "-"}
                </td>
                <td className="border border-gray-300 p-2">
                  {record.created_at
                    ? new Date(record.created_at).toLocaleDateString()
                    : "-"}
                </td>
                <td className="border border-gray-300 p-2">
                  {record.status === true ? "Active" : "Inactive"}
                </td>{" "}
                <td className="border border-gray-300 p-2 text-center">
                  <Link
                    to={`/admin/farmerdetails/${record.id}`}
                    className="link-edit me-2"
                  >
                    <VisibilityIcon fontSize="small" /> View
                  </Link>
                  {/* <Button size="small" color="error" className="ms-2">
                    <DeleteForeverIcon fontSize="small" /> Delete
                  </Button> */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center p-3">
                No farmers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center px-3 py-2 mt-2">
        <div className="text-muted">
          Page {currentPage} of{" "}
          {Math.max(1, Math.ceil(totalCount / rowsPerPage))} — Total Records:{" "}
          {totalCount}
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

export default FarmerList;
