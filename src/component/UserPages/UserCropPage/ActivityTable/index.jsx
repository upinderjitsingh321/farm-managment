import { useState, useRef, useEffect } from "react";
import "./style.css";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ModelPlantingForm from "../../../Models/Forms/ActivityForm/AddPlanting";
import ModelHarvestForm from "../../../Models/Forms/ActivityForm/Addharvest";

function ActivityListTable({
  heading,
  dataa,
  currentPage,
  rowsPerPage,
  totalCount,
  onPageChange,
  selectedCropId,
  croplist,
}) {
  const dropdownRef = useRef(null);
  // const [activitylist, setActivitylist] = useState(false);
  const [showdrop, setShowdrop] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);

  let access_token = localStorage.getItem("access_token");

  // const Activitydata = async () => {
  //   try {
  //     const result = await axios.get(
  //       `${USER.USER_CROP_LIST}?field_id=${croplist}?page_no=${pageNo}&rows=${rows}`,
  //       {
  //         headers: {
  //           access_token: access_token,
  //         },
  //       }
  //     );
  //     console.log(result, "Fetched Farms");
  //     const response = result?.data?.data;

  //     setActivitylist(response?.data?.data?.list);
  //     setPerTotalCount(response?.data?.data?.totalCounts || 0);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   if (activitylist) {
  //     Activitydata(croplist);
  //   }
  // }, [activitylist, currentPage, rowsPerPage]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowdrop(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!close) return null;

  return (
    <div className="userdashboardtable shadow my-3 ">
      <div className="dash-title d-flex justify-content-between">
        <h5 className="pt-1 ps-2">
          {heading}
          <KeyboardDoubleArrowDownIcon />
        </h5>
        <div className="profile-dropdown" ref={dropdownRef}>
          <button className="add-button" onClick={() => setShowdrop(true)}>
            <AddCircleIcon /> Add Activities
            <KeyboardArrowDownIcon />
            <div
              className="dropdown-btn"
              style={{ display: `${showdrop ? "block" : "none"}` }}
            >
              <Link
                to={""}
                onClick={(e) => {
                  e.preventDefault();
                  setModalOpen(true);
                }}
              >
                {" "}
                <img src="img/planting.png" className="img-icon" />
                Add Planting
              </Link>
              <Link
                to={""}
                onClick={(e) => {
                  e.preventDefault();
                  setModalOpen1(true);
                }}
              >
                {" "}
                <img src="img/harvest.png" className="img-icon" />
                Add Harvest
              </Link>
            </div>
          </button>
        </div>

        <ModelPlantingForm
          show={modalOpen}
          onclose={() => setModalOpen(false)}
          cropId={selectedCropId}
          croplist={croplist}
        />
        <ModelHarvestForm
          show={modalOpen1}
          onclose={() => setModalOpen1(false)}
          cropId={selectedCropId}
          croplist={croplist}
        />

        <div className="d-flex align-items-center gap-2 me-2">
          {minimize ? (
            <div
              className=""
              onClick={() => setMinimize(false)}
              style={{ cursor: "pointer" }}
            >
              <i class="fa-solid fa-minus"></i>
            </div>
          ) : (
            <div
              className=""
              onClick={() => setMinimize(true)}
              style={{ cursor: "pointer" }}
            >
              <i class="fa-solid fa-plus"></i>
            </div>
          )}
          <div
            className="text-danger"
            onClick={() => setClose(false)}
            style={{ cursor: "pointer" }}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
      {minimize && (
        <table className="w-100 border-collapse border border-gray-300 mb-5">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Activity </th>
              <th className="border border-gray-300 p-2"> Date</th>
              <th className="border border-gray-300 p-2"> Rate</th>
              {/* <th className="border border-gray-300 p-2"> User</th> */}
              <th className="border border-gray-300 p-2"> Note</th>
            </tr>
          </thead>
          <tbody>
            {selectedCropId !== null && (
              <>
                {dataa &&
                  dataa.map((item, index) => (
                    <tr key={index} className="border border-gray-300">
                      {" "}
                      <td className="border border-gray-300 p-2">
                        {item.activity_name}
                      </td>
                      <td className="border border-gray-300 p-2">
                      {new Date(item.start_date).toISOString().split('T')[0]}

                      </td>
                      <td className="border border-gray-300 p-2">
                        {item.rate}
                      </td>
                      {/* <td className="border border-gray-300 p-2">
                        {item.user}
                      </td> */}
                      <td className="border border-gray-300 p-2">
                        {item.note}
                      </td>
                      <td>
                        <button className="button_dez">
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                          {/* <ArrowDropDownIcon /> */}
                        </button>
                      </td>
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </table>
      )}
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(totalCount / rowsPerPage)} — Total
          Activity: {totalCount}
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

export default ActivityListTable;
