import { useEffect, useState } from "react";
import "./style.css";
import { USER } from "../../../config/endpoints";
import axios from "axios";

function UserProductionTable({ heading }) {
  const [expenselist, setExpenselist] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  const access_token = localStorage.getItem("access_token");

  const fetchexpense = async (page) => {
    try {
      const res = await axios.get(`${USER.EXPENSE_LIST}?page_no=${page}&rows=${rowsPerPage}`, {
        headers: { access_token },
      });

      if (res.status === 200 && res.data?.data) {
        const { list, totalCounts } =  res.data?.data;
        setExpenselist(list|| []);
        setTotalCount(totalCounts || 0);
      }
    } catch (err) {
      console.error("Failed to fetch expenses:", err);
    }
  };

  const onPageChange = (page) => {
    if (page >= 1 && page <= Math.ceil(totalCount / rowsPerPage)) {
      setCurrentPage(page); // 👈 avoid setting invalid page
    }
  };
  

  useEffect(() => {
    fetchexpense(currentPage);
  }, [currentPage]);

  return (
    <div className="p-4">
      <h4 className="pb-3">{heading}</h4>
      <table className="w-100 border-collapse border border-gray-300">
        <thead className="head-border">
          <tr>
            <th className="border border-gray-300 p-2">Crops</th>
            <th className="border border-gray-300 p-2">Acre</th>
            <th className="border border-gray-300 p-2">Fertilizer</th>
            <th className="border border-gray-300 p-2">Herbicide</th>
            <th className="border border-gray-300 p-2">Insecticide</th>
            <th className="border border-gray-300 p-2">Fungicide</th>
            <th className="border border-gray-300 p-2">Manure</th>
            <th className="border border-gray-300 p-2">Labour Cost</th>
            <th className="border border-gray-300 p-2">Activities</th>
            {/* <th className="border border-gray-300 p-2">Other Cost</th> */}
          </tr>
        </thead>
        <tbody>
          {expenselist.map((record) => {
            const inputsData = {
              herbicide: 0,
              organic: 0,
              fungicide: 0,
              insecticide: 0,
              fertilizer: 0,
            };
            record?.inputs?.map((input) => {
              const type = input?.inputname;
              const rate = Number(input?.rate || 0);

              switch (type) {
                case "herbicide":
                  inputsData.herbicide += rate;
                  break;
                case "organic":
                  inputsData.organic += rate;
                  break;
                case "fungicide":
                  inputsData.fungicide += rate;
                  break;
                case "insecticide":
                  inputsData.insecticide += rate;
                  break;
                default:
                  inputsData.fertilizer += rate;
              }
            });

           const activiteTotal= record?.activities?.reduce((total,value)=>{
              return total+Number(value?.rate)
            },0)

            return (
              <tr key={record.id} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{record.crop}</td>
                <td className="border border-gray-300 p-2">{record.acre}</td>
                <td className="border border-gray-300 p-2">{inputsData.fertilizer || "-"}</td>
                <td className="border border-gray-300 p-2">{inputsData.herbicide || "-"}</td>
                <td className="border border-gray-300 p-2">{inputsData.insecticide || "-"}</td>
                <td className="border border-gray-300 p-2">{inputsData.fungicide || "-"}</td>
                <td className="border border-gray-300 p-2">{inputsData.organic || "-"}</td>
                <td className="border border-gray-300 p-2">{record.labour}</td>
                <td className="border border-gray-300 p-2">{activiteTotal}</td>
                {/* <td className="border border-gray-300 p-2">{record.profit}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(totalCount / rowsPerPage)} — Total Fields: {totalCount}
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

export default UserProductionTable;
