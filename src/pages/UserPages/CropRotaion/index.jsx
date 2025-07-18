import React, { useEffect, useState } from "react";
import CropRotationTable from "../../../component/UserPages/UserCropRotation/CropRotationTable";
import CropAreaTable from "../../../component/UserPages/UserCropRotation/CropAreaTable";
import CustomAreaPieChart from "../../../component/Charts/UserCharts/SeededAreaChart";
import axios from "axios";
import { USER } from "../../../config/endpoints";
import { toast } from "react-toastify";

function UserCropRotationPage() {
 
  const access_token = localStorage.getItem("access_token"); // Replace with your token handling logic

  const [cropcount, setCropcount] = useState([]);


  const cropsummarydata = async () => {
    try {
      const res = await axios.get(`${USER.AVG_CROPDATA}`, {
        headers: { access_token },
      });

    

      const modifycropArray = res?.data?.data?.Avgcropdata.map((item) => {
        return {
          name: item?.crop,
          value: item?.total_acres,
        };
      });
   

      setCropcount(modifycropArray || []);
    } catch (error) {
      console.error(
        "❌ API call failed:",
        error?.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    cropsummarydata();
  }, []);
  return (
    <div className="my-5">
      <div className="row mx-1">
        <div className="col-md-12">
          <CropRotationTable
            heading={" Crop Rotation History"}
           
          />
        </div>
        <div className="col-md-7">
          <CropAreaTable
            heading={"Seeded Land Over Past 4 Years"}
         
          />
        </div>
        <div className="col-md-5 mt-3">
          {" "}
          <CustomAreaPieChart
            data={cropcount}
            colors="#FF8042"
            heading="Summary Cultivated area"
            tittle="crop"
          />
        </div>
      </div>
    </div>
  );
}

export default UserCropRotationPage;
