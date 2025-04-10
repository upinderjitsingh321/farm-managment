import React, { useEffect, useState } from "react";
import CropListTable from "../../../component/UserPages/UserCropPage/CropListTable";
import ActivityListTable from "../../../component/UserPages/UserCropPage/ActivityTable";
import InputTable from "../../../component/UserPages/UserCropPage/ChemicalTable";
import axios from "axios";
import { toast } from "react-toastify";
import { USER } from "../../../config/endpoints";

function UserCropPage() {
  const [croplist, setCroplist] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [rows, setRows] = useState(5);
  const [totalCount, setTotalCount] = useState(0);
  const [farmId, setFarmId] = useState(null); // <== Store farm_id here

  const access_token = localStorage.getItem("access_token");

    // Step 1: Fetch fields and extract farm_id
    const fetchFarmIdFromFields = async () => {
      try {
        const result = await axios.get(`${USER.FARM_FIELDS}`, {
          headers: {
            access_token: access_token,
          },
        });
  
        const fields = result.data?.fields;
  
        if (fields?.length > 0) {
          setFarmId(fields[0].farm_id); // Use first one or let user select
          localStorage.setItem("farm_id", fields[0].farm_id); // Optional: store for later use
          console.log("Farm ID fetched:", fields[0].farm_id);
        }
      } catch (error) {
        console.error("Error fetching fields and farm_id", error);
      }
    };

    

  const handledata = async () => {
    try {
      const result = await axios.get(
        `${USER.USER_CROP_LIST}?farm_id=${farmId}&page_no=${pageNo}&rows=${rows}`,
        {
          headers: {
            access_token: access_token,
          },
        }
      );

      const response = result?.data?.data;

      setCroplist(response?.list || []);
      setTotalCount(response?.totalCounts || 0);

      console.log(result, "Fetched Crop List");
      toast.success("Successfully fetched crops");
    } catch (error) {
      console.log(error);
      toast.error("Error fetching crops");
    }
  };


  useEffect(() => {
    fetchFarmIdFromFields();
  }, []);


  useEffect(() => {
    if (farmId) {
    handledata();
    }
  }, [farmId,pageNo, rows]);

  return (
    <div className="my-5 vh-100">
      <div className="row mx-1">
        <div className="col-md-8">
          <CropListTable
            heading={"Crop List"}
            data={croplist}
            currentPage={pageNo}
            rowsPerPage={rows}
            totalCount={totalCount}
            onPageChange={(newPage) => setPageNo(newPage)}
          />
        </div>
        <div className="col-md-4">
          <ActivityListTable
            heading={"Activity"}
            activity={"planting"}
            rate={"200"}
            date={"2-2-2025"}
            user={"pinder"}
            note={"none"}
          />
          <InputTable
            heading={"Inputs"}
            inputs={"corazen"}
            name={"50corazenml"}
            applydate={"5-2-2025"}
            dosage={"200ml"}
            rate={"1200"}
            user={"pinder"}
            period={"summer"}
            note={"none"}
          />
        </div>
      </div>
    </div>
  );
}

export default UserCropPage;
