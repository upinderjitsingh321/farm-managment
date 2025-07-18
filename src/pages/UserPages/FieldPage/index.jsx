import React, { useEffect, useState } from "react";
import UserFarmTable from "../../../component/UserPages/UserFieldPage/FarmTable";
import UserFieldTable from "../../../component/UserPages/UserFieldPage/FieldTable";
import UserCropTable from "../../../component/UserPages/UserFieldPage/CropTable";
import UserSoilTable from "../../../component/UserPages/UserFieldPage/SoilTable";
import "./style.css"
import axios from "axios";
import { toast } from "react-toastify";
import { USER } from "../../../config/endpoints";

function UserField() {
  const [farmlist, setFarmlist] = useState([]);
  const [fieldlist, setFieldlist] = useState([]);
  const [selectedFarmId, setSelectedFarmId] = useState(null); //  New state
  const [fieldTotalCount, setFieldTotalCount] = useState(0); // for fields

  const [pageNo, setPageNo] = useState(1);
  const [rows, setRows] = useState(5);
  const [totalCount, setTotalCount] = useState(0); //new

  let access_token = localStorage.getItem("access_token");

  const handledata = async () => {
    console.log("checkdatahere");

    try {
      const result = await axios.get(
        `${USER.USER_FRAM_LIST}?farm_id=${selectedFarmId}?page_no=${pageNo}&rows=${rows}`,
        {
          headers: {
            access_token: access_token,
          },
        }
      );
      const response = result?.data?.data;

      setFarmlist(response?.list || []);
      setTotalCount(response?.totalCounts || 0);

      console.log(result, "Fetched Farms");
    } catch (error) {
      console.log(error);
    }
  };

  const fieldData = async (selectedFarmId) => {
    console.log(selectedFarmId,"selectedFarmIdselectedFarmId")
    try {
      const resultfield = await axios.get(
        `${USER.USER_FIELD_LIST}?farm_id=${selectedFarmId}&page_no=${pageNo}&rows=${rows}`,
        {
          headers: {
            access_token: access_token,
          },
        }
      );

      setFieldlist(resultfield?.data?.data?.list);
      setFieldTotalCount(resultfield?.data?.data?.totalCounts || 0);

      console.log(resultfield, "resultfield");
      // toast.success(`Succesfully`); 
      
      
    } catch (error) {
      console.log(error);
    }
  };
  console.log(fieldlist,"fieldsss")
  const handleFarmClick = (farmId) => {
    // alert(farmId);
    setSelectedFarmId(farmId);
  };

  useEffect(() => {
    handledata();
  }, [pageNo, rows]);

  useEffect(() => {
    if (selectedFarmId) {
      fieldData(selectedFarmId);
    }
  }, [selectedFarmId, pageNo, rows]);
  console.log(selectedFarmId, "checkckxccds");

  
  return (
    <div className="app-container">
    <div className="content">
      <div className="row mx-1">
        <div className="col-md-12">
          <UserFarmTable
            heading={"Farm List"}
            data={farmlist}
            onRowClick={handleFarmClick}
            currentPage={pageNo}
            rowsPerPage={rows}
            totalCount={totalCount}
            onPageChange={(newPage) => setPageNo(newPage)}
          />
        </div>

        <div className="col-md-6">
          <UserFieldTable
            heading={"Field List"}
            selectedFarmId={selectedFarmId}
            data={fieldlist}
            currentPage={pageNo}
            rowsPerPage={rows}
            totalCount={fieldTotalCount}
            onPageChange={(newPage) => setPageNo(newPage)}
          />
        </div>
        <div className="col-md-6">
          <UserCropTable
            heading={"Crop List"}
            Field={"#F01>4"}
            Acre={"20"}
            Crop={"Rice"}
            Year={"2025"}
            Variety={"1509"}
            Production={"50"}
          />
        </div>
      </div>
    </div>

   
  </div>
);
}

export default UserField;
