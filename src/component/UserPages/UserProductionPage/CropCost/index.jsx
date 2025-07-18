import axios from "axios";
import { useEffect, useState } from "react";
import { USER } from "../../../../config/endpoints";

function UserExpenseTable() {
  const [profit, setProfit] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const access_token = localStorage.getItem("access_token");

  const GetProfit = async (page) => {
    try {
      const res = await axios.get(
        `${USER.EXPENSE_LIST}?page_no=${page}&rows=${rowsPerPage}`,
        {
          headers: { access_token },
        }
      );

      if (res.status === 200 && res.data?.data) {
        const { list, totalCounts } = res.data?.data;
        setProfit(list || []);
        setTotalCount(totalCounts || 0);
      }
    } catch (err) {
      console.error("Failed to fetch expenses:", err);
    }
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    GetProfit(currentPage);
  }, [currentPage]);

  return (
    <div className="p-4">
      <h4 className="pb-3">Output</h4>

      <table className="w-100 border-collapse border border-gray-300">
        <thead className="head-border">
          <tr>
            <th className="border border-gray-300 p-2"> Crop</th>
            <th className="border border-gray-300 p-2"> Acre</th>
            <th className="border border-gray-300 p-2"> Production(Qtl.)</th>
            <th className="border border-gray-300 p-2">Total Income</th>
            <th className="border border-gray-300 p-2"> Income/acre</th>
            <th className="border border-gray-300 p-2">Net Income</th>
          </tr>
        </thead>
        <tbody>
          {profit.map((records) => {
            const activiteTotal = records?.activities?.reduce(
              (total, value) => {
                return total + Number(value?.rate) || 0;
              },
              0
            );

            const inputTotal = records?.inputs?.reduce((total, value) => {
              return total + Number(value?.rate) || 0;
            }, 0);
            const totalCost =
              Number(records.labour || 0) + inputTotal + activiteTotal;
            return (
              <tr key={records.id} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{records.crop}</td>
                <td className="border border-gray-300 p-2">{records.acre}</td>
                <td className="border border-gray-300 p-2">
                  {Number(records.production) * Number(records.acre)}
                </td>
                <td className="border border-gray-300 p-2">
                  {Number(records.production) * Number(records.price)}
                </td>
                <td className="border border-gray-300 p-2">{records.price}</td>
                <td className="border border-gray-300 p-2">
                  {Number(records.production) * Number(records.price) +"-"+totalCost} = 
                  {Number(records.production) * Number(records.price) -
                    totalCost}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="text-muted">
          Page {currentPage} of {Math.ceil(totalCount / rowsPerPage)} — Total
          Fields: {totalCount}
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
export default UserExpenseTable;
