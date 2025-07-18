import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import SoilTable from "../../../component/UserPages/SoilPage/SoilTable";
import Nutrient from "../../../component/UserPages/SoilPage/NutrientTable";
import { USER } from "../../../config/endpoints";

function UserSoilPage() {
  const [soilData, setSoilData] = useState([]);
  const [nutrientdata, setNutrientdata] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [ntotalCount, setNtotalCount] = useState(0);
  const [npageNo, setNpageNo] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [nrows, setNrows] = useState(5);
  const [selectedFieldId, setSelectedFieldId] = useState(null);
  const [selectednutrientId, setSelectednutrientId] = useState(null);

  const access_token = localStorage.getItem("access_token"); // Replace with your token handling logic

  const fetchSoilData = async () => {
    if (!selectedFieldId) return;
    try {
      const res = await axios.get(
        `${USER.USER_SOIL_LIST}?soil_id=${selectedFieldId}&page_no=${currentPage}&rows=${rowsPerPage}`,
        {
          headers: { access_token },
        }
      );
      const response = res?.data?.data;
      setSoilData(response?.list || []);
      setTotalCount(response?.totalCounts || 0);
    } catch (error) {
      console.error("Soil data fetch failed:", error);
    }
  };
  const fetchnutrientData = async () => {
    if (!selectednutrientId) return; // Prevent making the API call if no field is selected

    try {
      const res = await axios.get(
        `${USER.USER_NUTRIENT}?id=${selectednutrientId}&page_no=${npageNo}&rows=${nrows}`,
        {
          headers: {
            access_token,
          },
        }
      );

      const response = res?.data?.data;
      console.log(response,"hhihi")
      setNutrientdata(response?.list || []);
      setNtotalCount(response?.totalCounts || 0);
      // toast.success("Successfully loaded soil inputs");
    } catch (error) {
      console.error("Failed to fetch soil input data:", error);
      toast.error("Failed to load soil inputs");
    }
  };


  const handleFieldChange = (fieldId) => {
    setSelectedFieldId(fieldId);
    setCurrentPage(1); // Reset page on new field selection
  };
  
  useEffect(() => {
    fetchSoilData();
  }, [selectedFieldId, currentPage]);
  useEffect(() => {
    if (selectednutrientId) {
    fetchnutrientData(selectednutrientId); // Fetch data when `selectedFieldId`, `pageNo`, or `rows` change
  }
  }, [selectednutrientId, npageNo, nrows]);


  
  return (
    <div className="container-fluid">
      <div className="row mx-3 my-4">
        <div className="col-md-12 my-5">
          <SoilTable
          heading={"Soil List"}
          dataa={soilData}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          totalCount={totalCount}
          selectedFieldId={selectedFieldId}
          onFieldChange={handleFieldChange}
          onPageChange={setCurrentPage}
          />
        </div>

        <div className="col-md-12 my-5">
          <Nutrient
            heading={"Nutrient List"}
            dataa={nutrientdata}
            currentPage={npageNo}
            rowsPerPage={nrows}
            totalCount={ntotalCount}
            onFieldChange={setSelectednutrientId}
            onPageChange={(newPage) => setNpageNo(newPage)}
          />
        </div>
      </div>
    </div>
  );
}

export default UserSoilPage;
