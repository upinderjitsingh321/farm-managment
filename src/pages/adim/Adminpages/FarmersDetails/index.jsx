import React, { useEffect, useState } from 'react';
import "./style.css";
import AdminUserFarmTable from '../../../../component/admincomponents/farmerTables/FarmTable';
import AdminCropListTable from '../../../../component/admincomponents/farmerTables/CropsTables';
import AdminSoilTable from '../../../../component/admincomponents/farmerTables/SoilTables';
import AdminChemicaltable from '../../../../component/admincomponents/farmerTables/ChemicalTable';
import AdminUserFieldTable from '../../../../component/admincomponents/farmerTables/FieldsTable';
import AdminNutrient from '../../../../component/admincomponents/farmerTables/NutrientsTable';
import FarmerPersonalDetailsTable from '../../../../component/admincomponents/farmerTables/FarmerPersonalDetails';
import { Button } from '@mui/material';
import { USER } from '../../../../config/endpoints';
import axios from 'axios';
import { useParams } from 'react-router';

function FarmerDetails() {
  const { id, name } = useParams();

  const [personalDataList, setPersonalDataList] = useState([]);
  const [farmdata, setFarmdata] = useState([]);
  const [cropdata, setCropdata] = useState([]);
  const [inputdata, setInputdata] = useState([]);
  const [fielddata, setFielddata] = useState([]);
  const [soildata, setSoildata] = useState([]);
  const [nutrientdata, setNutrientdata] = useState([]);
  const access_token = localStorage.getItem("access_token");

  const fetchPersonalData = async () => {
    try {
      const result = await axios.get(`${USER.PERSONAL_DATA}/${id}`, {
        headers: { access_token },
      });
      const response = result?.data?.data;
      const personalData = response?.personal;
      const farmData = response?.farmdetail;
      const cropData = response?.farmdetail;
      const inputData = response?.farmdetail;
      const fieldData = response?.farmdetail;
      const soilData = response?.farmdetail;
      const nutrientdata = response?.farmdetail;
  
      setPersonalDataList(personalData ? [personalData] : []);
      setFarmdata(farmData || []);
      setCropdata(cropData || []);
      setInputdata(inputData || []);
      setFielddata(fieldData || []);
      setSoildata(soilData || []);
      setNutrientdata(nutrientdata || []);
      
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };
  
  console.log(cropdata,"personalDataList")
  
  useEffect(() => {
    if (id) {
      fetchPersonalData();
    }
  }, [id]);

  const farmTableData = [
    { FarmId: "#01", FarmName: "JattFarm", Type: "Crop", Created: "27-2-2025", Owner: "Upinderjit Singh", Fields: "4", Acre: "20", Active: "Active" },
    { FarmId: "#02", FarmName: "SinghFarm", Type: "Crop", Created: "28-2-2025", Owner: "Upinderjit Singh", Fields: "5", Acre: "25", Active: "Active" }
  ];

  return (
    <div className=''>
      <div className='d-flex justify-content-between me-3'>
        <h4 className='ms-3 mt-2'>{id}</h4>
        {/* <Button className='mt-1 me-2' variant="contained" size="small" color="error">
          Suspend
        </Button> */}
      </div>

      <div className='empty'></div>

      <div className="row mx-1">
        <div className="col-md-12">
          <FarmerPersonalDetailsTable heading="Personal Details" data={personalDataList} />
        </div>

        <div className="col-md-6">
          <AdminUserFarmTable heading="Farm List" data={farmdata}        totalCount={farmdata.length}
 />
        </div>

        <div className="col-md-6">
          <AdminCropListTable
            heading="Crop List"
           data={cropdata}
           totalCount={cropdata.length}

          />
        </div>

        <div className="col-md-6">
          <AdminChemicaltable
            heading="Chemical"
         data={inputdata}
         totalCount={inputdata.length}

          />
        </div>

        <div className="col-md-6">
          <AdminUserFieldTable
            heading="Field List"
         data={fielddata}
         totalCount={fielddata.length}

          />
        </div>

        <div className="col-md-12">
          <AdminSoilTable
            heading="Soil List"
        data={soildata}
        totalCount={soildata.length}

          />
        </div>

        <div className="col-md-12">
          <AdminNutrient
            heading="Nutrients List"
          data={nutrientdata}
          totalCount={nutrientdata.length}
          />
        </div>
      </div>
    </div>
  );
}

export default FarmerDetails;
