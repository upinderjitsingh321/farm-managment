import React, { useEffect, useState } from "react";
import "./style.css";
import DashboardBox from "../../../../component/admincomponents/dashboard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AdminPieChart from "../../../../component/Charts/AdminCharts/PieChart/Index";
import IrrigationPieChart from "../../../../component/Charts/AdminCharts/AverageIrrigation";
import PhPieChart from "../../../../component/Charts/AdminCharts/AveragePhChart/Index";
import PracticesPieChart from "../../../../component/Charts/AdminCharts/AveragePractices";
import { USER } from "../../../../config/endpoints";
import axios from "axios";
import PHAverage from "../../../../component/Charts/AdminCharts/phAverage";

function Dashboard() {
  const [usercount, setUsercount] = useState([]);
  const [activecount, setActivecount] = useState([]);
  const [lastmonthcount, setLastmonthcount] = useState([]);
  const [organiccount, setOrganiccount] = useState([]);
  const [phavg, setPhavg] = useState([]);
  const [crop, setCrop] = useState([]);
  const [irri, setIrri] = useState([]);

  const access_token = localStorage.getItem("access_token"); // Replace with your token handling logic

  const fetchallusercount = async () => {
    try {
      const res = await axios.get(`${USER.USER_COUNT}`, {
        headers: { access_token },
      });
      const response = res?.data?.data;
      setUsercount(response?.usercount || []);
    } catch (error) {
      console.error("Soil data fetch failed:", error);
    }
  };
  const fetchallactivecount = async () => {
    try {
      const res = await axios.get(`${USER.ACTIVE_COUNT}`, {
        headers: { access_token },
      });
      const response = res?.data?.data;
      setActivecount(response?.usercount || []);
    } catch (error) {
      console.error("Soil data fetch failed:", error);
    }
  };
  const fetchlastmonthcount = async () => {
    try {
      const res = await axios.get(`${USER.LASTMONTH_COUNT}`, {
        headers: { access_token },
      });

      const response = res?.data?.data;
      console.log(response, "usercount");
      setLastmonthcount(response?.lastmonth || []);
    } catch (error) {
      console.error("Soil data fetch failed:", error);
    }
  };
  const fetchorganiccount = async () => {
    try {
      const res = await axios.get(`${USER.ORGANIC_COUNT}`, {
        headers: { access_token },
      });

      console.log(res, "ress");

      const modifyArray = res?.data?.data?.organiccount.map((item) => {
        return {
          name: item?.is_organic === true ? "Organic" : "InOrgnic",
          value: item?.organic_count,
        };
      });
      const modifyCropArray = res?.data?.data?.crop.map((item) => {
        return {
          name: item?.crop,
          value: item?.crop_count,
        };
      });
      const modifyIrrArray = res?.data?.data?.irrig.map((item) => {
        return {
          name: item?.irrigation_mth,
          value: item?.irrigarion_count,
        };
      });

      const response = res?.data?.data;

      console.log(response, "usercount");
      console.log(modifyIrrArray, "modifyIrrArray");

      setOrganiccount(modifyArray || []);
      setPhavg(response?.phlevel[0]?.ph_avg);
      setCrop(modifyCropArray || []);
      setIrri(modifyIrrArray || []);

      // console.log(phavg, "phaverage");
    } catch (error) {
      console.error("Soil data fetch failed:", error);
    }
  };
console.log(phavg,"iuuiuui")



  useEffect(() => {
    fetchallusercount();
  }, []);
  useEffect(() => {
    fetchallactivecount();
  }, []);
  useEffect(() => {
    fetchlastmonthcount();
  }, []);
  useEffect(() => {
    fetchorganiccount();
  }, []);
  

  const data1 = [
    { name: "Rice", value: 400 },
    { name: "Wheat", value: 1000 },
    { name: "Cron", value: 4000 },
    { name: "Bajra", value: 2000 },
    { name: "Sugercane", value: 4100 },
    { name: "Sunflower", value: 1400 },
    { name: "Musted", value: 2400 },
    { name: "Groundnut ", value: 4200 },
    { name: "Oats", value: 3000 },
    { name: "Coffee", value: 4500 },
  ];
  const data2 = [
    { name: "Rice", value: 400 },
    { name: "Wheat", value: 1000 },
    { name: "Cron", value: 4000 },
    { name: "Bajra", value: 2000 },
    { name: "Sugercane", value: 4100 },
    { name: "Sunflower", value: 1400 },
    { name: "Musted", value: 2400 },
    { name: "Groundnut ", value: 4200 },
    { name: "Oats", value: 3000 },
    { name: "Coffee", value: 4500 },
  ];

 
  return (
    <div>
      <div
        className="right-content"
        style={{ background: "rgb(225 228 231 / 38%)" }}
      >
        <div className="row dashboardboxwraperrow">
          <div className="col-md-8 p-0 ps-2">
            <div className="dashboardboxwraper d-flex ">
              <DashboardBox
                color={["#1da256", "#48d483"]}
                cardicon={<TrendingUpIcon />}
                icon={"Profile"}
                grow={true}
                totaluser={usercount}
                tittle={"Total User"}
              />
              <DashboardBox
                color={["#c012e2", "#eb64fe"]}
                cardicon={<TrendingUpIcon />}
                icon={"activeprofile"}
                grow={true}
                totaluser={activecount}
                tittle={"Active User"}
              />
              <DashboardBox
                color={["#2c78e5", "#60aff5"]}
                cardicon={<TrendingDownIcon />}
                icon={"profile"}
                grow={true}
                totaluser={7}
                tittle={"Pending Reports"}
              />
              <DashboardBox
                color={["#e1950e", "#f3cd29"]}
                cardicon={<TrendingDownIcon />}
                icon={"activeprofile"}
                grow={true}
                totaluser={lastmonthcount}
                tittle={"Last Month Users"}
              />
            </div>
          </div>
          <div className="col-md-4 p-0">
            <div className="">
              <PracticesPieChart
                data={organiccount}
                heading="ORGANIC AND INORGANIC FARM RATIO"
              />
            </div>
          </div>
        </div>
        <div className="row ms-0 my-4 gap-3">
        <div className="col-md-4 bg-white shadow cropdata">
            <div className="set-mag">
              <h4 className="mt-5 text-center ">Crop Growth Analysis</h4>
              <AdminPieChart data={crop} />
            </div>
          </div>
          <div className="col-md-4 bg-white shadow cropdata1">
            <IrrigationPieChart
              data={irri}
              heading="Farm Irrigation Statistics"
            />
          </div>
          {/* <div
            className="col-md-8 bg-white shadow"
            style={{ width: "65%", borderRadius: "10px" }}
          >
            <div className=" set-mag">
              <div
                className="d-flex justify-content-center"
                style={{ gap: "6rem" }}
              >
                <h4 className="mt-5"> Soil Nutrient Deficiency</h4>
                <h4 className="mt-5"> Soil Nutrient Surplus</h4>
              </div>
              <PhPieChart data={data1} data1={data2} />
            </div>
          </div> */}
          <div className="col-md-4 bg-white shadow cropdata1">
            <PHAverage data={phavg} heading="Average pH Levels in Farmland" />
          </div>
        </div>
        <div className="row ms-0 my-4" style={{ gap: "20px" }}>
         
          {/* <div className="col-md-4 bg-white shadow  cropdata">
            <div className=' set-mag'>             
              <h4 className='mt-5 text-center '>Crop Growth Analysis</h4>
              <AdminPieChart data={data1} />

            </div>

          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
