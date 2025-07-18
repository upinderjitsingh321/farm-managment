import React, { useEffect, useState } from "react";
import CropListTable from "../../../component/UserPages/UserCropPage/CropListTable";
import ActivityListTable from "../../../component/UserPages/UserCropPage/ActivityTable";
import InputTable from "../../../component/UserPages/UserCropPage/InputTable";
import axios from "axios";
import { toast } from "react-toastify";
import { USER } from "../../../config/endpoints";

function UserCropPage() {
  const [croplist, setCroplist] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [rows, setRows] = useState(15);
  const [totalCount, setTotalCount] = useState(0);
  const [apageNo, setAPageNo] = useState(1);
  const [arows, setARows] = useState(5);
  const [ipageNo, setIPageNo] = useState(1);
  const [irows, setIRows] = useState(3);
  const [selectedCropId, setSelectedCropId] = useState(0);
  const [selectedId, setSelectedId] = useState(0);
  const [activityTotalCount, setActivityTotalCount] = useState(0); // for fields
  const [activitylist, setactivitylist] = useState([]); // for fields
  const [selectedFieldId, setSelectedFieldId] = useState(null);
  const [inputList, setInputList] = useState([]);
  const [inputTotalCount, setInputTotalCount] = useState(0);
  

  let access_token = localStorage.getItem("access_token");

  const handledata = async () => {
    try {
      const result = await axios.get(
        `${USER.USER_CROP_LIST}?field_id=${selectedFieldId}&page_no=${pageNo}&rows=${rows}`,
        {
          headers: { access_token },
        }
      );
      const response = result?.data?.data;
      setCroplist(response?.list || []);
      setTotalCount(response?.totalCounts || 0);
    } catch (error) {
      console.log(error);
    }
  };

  const activitydata = async (selectedFarmId) => {
    console.log(selectedFarmId, "selectedFarmIdselectedFarmId");
    try {
      const resultfield = await axios.get(
        `${USER.USER_ACTIVITY_LIST}?crop_id=${selectedCropId}&page_no=${apageNo}&rows=${arows}`,
        {
          headers: {
            access_token: access_token,
          },
        }
      );

      setactivitylist(resultfield?.data?.data?.list);
      setActivityTotalCount(resultfield?.data?.data?.totalCounts || 0);

      console.log(resultfield, "resultfield");
      // toast.success(`Succesfully`);
    } catch (error) {
      console.log(error);
    }
  };

  const inputdata = async () => {
    try {
      const resultfield = await axios.get(
        `${USER.USER_INPUT_LIST}?crop_id=${selectedCropId}&page_no=${ipageNo}&rows=${irows}`,
        {
          headers: {
            access_token: access_token,
          },
        }
      );

      setInputList(resultfield?.data?.data?.list || []);
      setInputTotalCount(resultfield?.data?.data?.totalCounts || 0);
      // toast.success(`Successfully loaded inputs`);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Fetching input data for crop ID:", selectedCropId);

  const handleFarmClick = (crop_id) => {
    // alert(farmId);
    console.log(crop_id, "------->");
    setSelectedCropId(crop_id);
    setSelectedId(crop_id);
  };

  useEffect(() => {
    if (selectedCropId) {
      activitydata(selectedCropId);
    }
  }, [selectedId, apageNo, arows]);

  useEffect(() => {
    if (selectedId) {
      inputdata(selectedId);
    }
  }, [selectedId, ipageNo, irows]);

  useEffect(() => {
    if (selectedFieldId) {
      handledata(selectedFieldId);
    }
  }, [selectedFieldId, pageNo, rows]);

  return (
    <div className="my-5 vh-100">
      <div className="row mx-1">
        <div className="col-md-8">
          <CropListTable
            heading={"Crop List"}
            data={croplist}
            currentPage={pageNo}
            rowsPerPage={rows}
            onRowClick={handleFarmClick}
            totalCount={totalCount}
            onPageChange={(newPage) => setPageNo(newPage)}
            selectedFieldId={selectedFieldId}
            onFieldChange={setSelectedFieldId}
          />
        </div>
        <div className="col-md-4">
          <ActivityListTable
            heading={"Activity"}
            croplist={croplist}
            dataa={activitylist}
            currentPage={apageNo}
            selectedCropId={selectedCropId}
            rowsPerPage={arows}
            totalCount={activityTotalCount}
            onPageChange={(newPage) => setAPageNo(newPage)}
          />
          <InputTable
            heading={"Inputs"}
            dataa={inputList}
            croplist={croplist}
            currentPage={ipageNo}
            selectedCropId={selectedId}
            rowsPerPage={irows}
            totalCount={inputTotalCount}
            onPageChange={(newPage) => setIPageNo(newPage)}
            
          />
        </div>
      </div>
    </div>
  );
}

export default UserCropPage;
