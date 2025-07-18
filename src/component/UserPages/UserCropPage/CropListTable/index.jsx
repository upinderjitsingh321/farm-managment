import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { USER } from "../../../../config/endpoints";
import axios from "axios";
import ModelCropForm from "../../../Models/Forms/CropForm";
import ModelMainCropForm from "../../../Models/Forms/CropForm/mainindex";

function CropListTable({
  heading,
  data,
  currentPage,
  rowsPerPage,
  totalCount,
  onPageChange,
  selectedFieldId,
  onFieldChange,
  onRowClick,
}) {
  const [close, setClose] = useState(true);
  const [minimize, setMinimize] = useState(true);
  const [fieldList, setFieldList] = useState([]);
  const [fieldid, setFieldId] = useState();
  const [fieldNo, setFieldNo] = useState();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const schema = yup.object().shape({
    field: yup.string(),
  });

  const { register } = useForm({
    resolver: yupResolver(schema),
  });

  const access_token = localStorage.getItem("access_token");

  const fetchCropData = async () => {
    try {
      const result = await axios.get(
        `${USER.USER_CROP_LIST}?field_id=${selectedFieldId}&page_no=${currentPage}&rows=${rowsPerPage}`,
        {
          headers: { access_token },
        }
      );
      const response = result?.data?.data;
      // Set data via props or parent handler if needed
    } catch (error) {
      console.log("Failed to fetch crop list", error);
    }
  };

  const years = Array.from(
    { length: 31 },
    (_, i) => new Date().getFullYear() - i
  );

  const fetchFields = async () => {
    try {
      const res = await axios.get(`${USER.DROPDOWN_FIELD_LIST}`, {
        headers: { access_token },
      });

      if (res.status === 200 && res.data?.data?.list?.length > 0) {
        setFieldList(res.data.data.list);
      }
    } catch (err) {
      console.error("Failed to fetch field list:", err);
    }
  };

  useEffect(() => {
    if (selectedFieldId) {
      fetchCropData();
    }
  }, [selectedFieldId, currentPage, rowsPerPage]);

  useEffect(() => {
    fetchFields();
  }, []);

  const handleSelectField = (e) => {
    const value = e.target.value; // this is a JSON string
    const obj = JSON.parse(value); // convert it to object

    setFieldId(obj.id);
    setFieldNo(obj.field_no);

    setValue("field", obj.id);
    trigger("field");

    // Debug logs
    console.log(obj.id, "Field ID");
    console.log(obj.field_no, "Field No");
    console.log(value, "Raw selected value (JSON string)");
  };

  if (!close) return null;

  return (
    <div
      className="userdashboardtable shadow my-3"
      style={{ paddingBottom: minimize ? "470px" : "0" }}
    >
      <div className="dash-title d-flex align-items-center justify-content-between px-2 py-2">
        <div className="d-flex align-items-center gap-2">
          <h5 className="pt-1">
            {heading} <KeyboardDoubleArrowDownIcon />
          </h5>
          <select
            onChange={(e) => onFieldChange(e.target.value)}
            className="drop_color2"
            value={selectedFieldId || ""}
          >
            <option value="">Select Field</option>
            {fieldList.map((field) => (
              <option key={field.id} value={field.id}>
                {`${field.users_farm?.farm_id}>${field.field_no}`}
              </option>
            ))}
          </select>
          <ModelMainCropForm />
          {/* <select
            id="year"
            name="year"
            onChange={(e) => setSelectedYear(e.target.value)}
            className="drop_color2"
            value={selectedYear || ""}
            style={{ marginLeft: "250px" }}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select> */}
        </div>

        <div className="d-flex align-items-center gap-2">
          <div
            onClick={() => setMinimize(!minimize)}
            style={{ cursor: "pointer" }}
          >
            <i className={`fa-solid ${minimize ? "fa-minus" : "fa-plus"}`}></i>
          </div>
          <div
            className="text-danger"
            onClick={() => setClose(false)}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>

      {minimize && (
        <div className="table-responsive">
          <table className="w-100 border-collapse border border-gray-300 mb-5 table-borderless">
            <thead>
              <tr className="bg-gray-200">
                <th>Field</th>
                <th>Crop</th>
                <th>Acre</th>
                <th>Variety</th>
                <th className="text-nowrap">Sowing Meth.</th>
                <th className="text-nowrap">Irrigation Meth.</th>
                <th>Planting</th>
                <th>Harvest</th>
                <th className="text-nowrap">Production (Qtl)</th>
                <th className="text-nowrap">Expected Price</th>
                <th>Note</th>
                {[
                  "herbicide",
                  "fertilizer",
                  "manure",
                  "bio-pesticide",
                  "fungicide",
                 
                ].map((icon, idx) => (
                  <th key={idx}>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>{icon.replace("-", " ")}</Tooltip>}
                    >
                      <img
                        className="th_img"
                        src={`img/${icon}.png`}
                        alt={icon}
                      />
                    </OverlayTrigger>
                  </th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => onRowClick(item.id)}
                    style={{ cursor: "pointer" }}
                    className="border border-gray-300"
                  >
                    <td>{item.field || ""}</td>
                    <td>{item.crop || ""}</td>
                    <td>{item.acre || ""}</td>
                    <td>{item.variety || ""}</td>
                    <td>{item.snowing_mth || ""}</td>
                    <td>{item.irrigation_mth || ""}</td>
                    <td>{item.planting || ""}</td>
                    <td>{item.harvest || ""}</td>
                    <td>{item.production || ""}</td>
                    <td>{item.price || ""}</td>
                    <td>{item.note || ""}</td>
                    <td>{item.herbicide || ""}</td>
                    <td>{item.fertilizer || ""}</td>
                    <td>{item.manure || ""}</td>
                    <td>{item.insecticide || ""}</td>
                    <td>{item.fungicide || ""}</td>
                    <td>{item.activity || ""}</td>
                    <td>
                      <button className="button_dez">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="18" className="text-center text-muted">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(totalCount / rowsPerPage)} — Total
          Crops: {totalCount}
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

export default CropListTable;
