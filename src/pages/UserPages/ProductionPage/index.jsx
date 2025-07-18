import React, { useEffect, useState } from "react";
import UserProduction from "../../../component/UserPages/UserProductionPage";
import UserExpenseTable from "../../../component/UserPages/UserProductionPage/CropCost";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { USER } from "../../../config/endpoints";
import axios from "axios";

function UserProductionPage() {
  
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);



  if (!close) return null;

  return (
    <div className="d-flex justify-content-center">
      <div className="userdashboardtable shadow m-5">
        <div className="dash-title d-flex justify-content-between">
          <h5 className="pt-1 ps-2">Production Summary</h5>
          <div>
            {minimize ? (
              <MinimizeIcon
                className="pb-1"
                onClick={() => setMinimize(false)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <AddIcon
                className="pt-2"
                onClick={() => setMinimize(true)}
                style={{ cursor: "pointer" }}
              />
            )}
            <CloseIcon
              className="pt-2 text-danger"
              onClick={() => setClose(false)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        {minimize && (
          <div className="row mx-auto">
            <div className="col-md-12 my-4">
              <UserProduction
                heading={"Input"}
              />
            </div>
            <hr className="text-success"></hr>
            <div className="col-md-12 my-4">
              <UserExpenseTable />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProductionPage;
