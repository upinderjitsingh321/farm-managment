import React, { useEffect, useState } from "react";
import "./style.css";

import CropDashboardTable from "../../../component/UserPages/UserDashboard/CropTable";
import FieldDashboardTable from "../../../component/UserPages/UserDashboard/FieldTable";
import CustomPieChart from "../../../component/Charts/UserCharts/PieCharts";
import SoilDashboardTable from "../../../component/UserPages/UserDashboard/SoilTable";
import { USER } from "../../../config/endpoints";
import axios from "axios";
function UserFarm() {
  const access_token = localStorage.getItem("access_token"); // Replace with your token handling logic

  const [cropcount, setCropcount] = useState([]);
  const [inputscount, setInputscount] = useState([]);
  const [farmcostcount, setFarmcostcount] = useState([]);

  const cropsummarydata = async () => {
    try {
      const res = await axios.get(`${USER.AVG_CROPDATA}`, {
        headers: { access_token },
      });

      console.log("Calling API:", `${USER.AVG_CROPDATA}`);

      console.log(res?.data, "modiArray");

      const modifycropArray = res?.data?.data?.Avgcropdata.map((item) => {
        return {
          name: item?.crop,
          value: item?.total_acres,
        };
      });
      const modifyInputsArray = res?.data?.data?.inputscounts.map((item) => {
        return {
          name: item?.inputname,
          value: item?.usage_count,
        };
      });

      setCropcount(modifycropArray || []);
      setInputscount(modifyInputsArray || []);
    } catch (error) {
      console.error(
        "❌ API call failed:",
        error?.response?.data || error.message
      );
    }
  };

  const Avgfarmcost = async () => {
    try {
      const res = await axios.get(`${USER.AVG_FARMCOSTDATA}`, {
        headers: { access_token },
      });

      const transformedData = [
        { name: "Labour", value: res?.data?.data?.total_labour_cost || 0 },
        { name: "Inputs", value: res?.data?.data?.total_input_cost || 0 },
        {
          name: "Activities",
          value: res?.data?.data?.total_activity_cost || 0,
        },
      ];


      setFarmcostcount(
        transformedData,
      );
    } catch (error) {
      console.error(
        "❌ API call failed:",
        error?.response?.data || error.message
      );
    }
  };

  console.log(farmcostcount, "farmcostcount");
  useEffect(() => {
    cropsummarydata();
  }, []);
  useEffect(() => {
    Avgfarmcost();
  }, []);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="container">
      <div className="row mt-2 gap-5">
        <div className="col-md-12 ">
          <div className="detail-card d-flex mb-5">
            <FieldDashboardTable
              heading={["Field"]}
              link={["Go to Field List"]}
            />
            <CropDashboardTable
              heading={["Crop]"]}
              link={["Go to Crop List"]}
            />
            <SoilDashboardTable
              heading={["Soil Detail]"]}
              link={["Go to Soil List"]}
            />
          </div>

          <div className="container"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 p-0 mb-4">
                <CustomPieChart
                  data={cropcount}
                  colors="#FF8042"
                  heading="Crop Record	"
                  tittle="crop"
                  link="/croprotationpage"
                />
              </div>
              <div className="col-md-4 ">
                <CustomPieChart
                  data={inputscount}
                  heading="Agricultural Inputs	"
                  tittle="chemical"
                  link="/soilpage"
                />
              </div>
              <div className="col-md-4 position-relative ">
                <CustomPieChart
                  data={farmcostcount}
                  heading="Expense"
                  tittle="profit"
                  link="/production"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserFarm;
