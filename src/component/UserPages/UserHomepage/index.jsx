import { useEffect, useRef, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { USER } from "../../../config/endpoints";

function UserHome() {
  const [profile, setProfile] = useState(false);
  const [userdata, setUserdata] = useState([]);
  const [totalArea, setTotalArea] = useState(0);
    const [profit, setProfit] = useState([]);

  const dropdownoneRef = useRef(null);

  const access_token = localStorage.getItem("access_token");

  const fetchAllData = async () => {
    try {
      const respponse = await axios.get(`${USER.ALL_DATA_LIST}`, {
        headers: {
          access_token: access_token,
        },
      });

      if (
        respponse.status === 200 &&
        Array.isArray(respponse.data?.data?.list)
      ) {
        setUserdata(respponse.data.data.list);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(userdata, "userdata");


    const GetProfit = async (page) => {
      try {
        const res = await axios.get(
          `${USER.EXPENSE_LIST}?page_no=${page}&rows=${rowsPerPage}`,
          {
            headers: { access_token },
          }
        );
  
        if (res.status === 200 && res.data?.data) {
          const { list } = res.data?.data;
          setProfit(list || []);
        }
      } catch (err) {
        console.error("Failed to fetch expenses:", err);
      }
    };

    useEffect(() => {
      GetProfit();
    }, []);


  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownoneRef.current &&
        !dropdownoneRef.current.contains(event.target)
      ) {
        setProfile(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Calculate total area of all fields whenever userdata changes
    const total = userdata.reduce((total, record) => {
      // Sum up the area of all fields in each farm
      return (
        total +
        record.users_farms?.reduce(
          (sum, farm) =>
            sum +
            (farm.field_lists?.reduce(
              (fieldSum, field) => fieldSum + Number(field.acre || 0),
              0
            ) || 0),
          0
        )
      );
    }, 0);
    console.log(total, "totall");
    setTotalArea(total); // Set the total area in state
  }, [userdata]);


  console.log(userdata,"userdata--->")

  return (
    <>
      {/* <nav>
        <div className="profile-dropdown" ref={dropdownoneRef}>
          <button onClick={() => setProfile(true)} className="profile-btn">
            Menu
          </button>
         

        
          
          </div>
        
      </nav> */}

      {userdata.map((record, index) => {
        return (
          <div className="user_card border-collapse border border-gray-300 ms-2 mt-4 shadow">
            <div className="d-flex justify-content-between pb-2">
              <p className="fs-5">{record.email}</p>
              <img className="head_pic" src="img/farm1.png" />
            </div>
            <div className="bg-white rounded">
              <div className="d-flex justify-content-between p-2">
                <div className="d-flex">
                  <img className="pic_size" src="img/created.png" />
                  <p className="m-0 ps-3">Created</p>
                </div>
                <div>
                  <p>
                    {" "}
                    {new Date(record.created_at).toISOString().split("T")[0]}
                  </p>
                </div>
              </div>
              <hr className="hor-line m-0"></hr>
              <div className="d-flex justify-content-between p-2">
                <div className="d-flex ">
                  <img className="pic_size" src="img/default_year.png" />
                  <p className="m-0 ps-3">Default Crop Season</p>
                </div>
                <div>
                  <p>{new Date(record.created_at).getFullYear()}</p>
                </div>
              </div>

              <hr className="hor-line m-0"></hr>
              <div className="d-flex justify-content-between p-2">
                <div className="d-flex p-2">
                  <img className="pic_size" src="img/farm4.png" />
                  <p className="m-0 ps-3">Farm(s)</p>
                </div>
                <div>
                  <p> {record.users_farms?.length || 0}</p>
                </div>
              </div>
              <hr className="hor-line m-0"></hr>

              <div className="d-flex justify-content-between p-2">
                <div className="d-flex p-2">
                  <img className="pic_size" src="img/field.png" />
                  <p className="m-0 ps-3">Fields</p>
                </div>
                <div>
                  <p>
                    {" "}
                    {record.users_farms?.reduce(
                      (total, farm) => total + (farm.field_lists?.length || 0),
                      0
                    )}
                  </p>
                </div>
              </div>
              <hr className="hor-line m-0"></hr>
              <div className="d-flex justify-content-between p-2">
                <div className="d-flex p-2">
                  <img className="pic_size" src="img/object.png" />
                  <p className="m-0 ps-3">Area</p>
                </div>
                <div>
                  <p> {totalArea}</p>
                </div>
              </div>
              <hr className="hor-line m-0"></hr>
              {/* <div className="d-flex p-2">
                <img className="pic_size" src="img/budget.png" />
                <p className="m-0 ps-3">Expenditure</p>
              </div>
              <hr className="hor-line m-0"></hr>
              <div className="d-flex p-2">
                <img className="pic_size" src="img/profits.png" />
                <p className="m-0 ps-3">Profit</p>
              </div> */}
            </div>
            <div className="d-flex  justify-content-between pt-3">
              {/* <button className="rounded-5 border-0 p-2 bt_color1 text-white">
                Leave this farm
              </button> */}
              <button className="rounded-5 border-0 p-2 fw-semibold bt_color text-white" style={{marginLeft:"75px"}}>
              <Link to={"/openaccount"} className=" openfarm">
                      Open This Account
                    </Link> 
              </button>
            </div>
          </div>
        );
      })}
      {/* <div className="p-4 vh-100">
        <table className="w-100 border-collapse border border-gray-300">
          <thead className="head-border">
            <tr>
              <th className="border border-gray-300 p-2">Farm Account</th>
              <th className="border border-gray-300 p-2">Created </th>
              <th className="border border-gray-300 p-2">Year</th>
              <th className="border border-gray-300 p-2">Farm(s)</th>
              <th className="border border-gray-300 p-2"> Area</th>
              <th className="border border-gray-300 p-2">Fields</th>
              <th className="border border-gray-300 p-2">Expenditure</th>
              <th className="border border-gray-300 p-2">Profit</th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((record, index) => {
              const activiteTotal = record?.activities?.reduce(
                (total, value) => {
                  console.log(total, "tataolll");
                  return total + Number(value?.rate) || 0;
                },
                0
              );
              console.log(activiteTotal, "scott");

              const inputTotal = record?.inputs?.reduce((total, value) => {
                return total + Number(value?.rate) || 0;
              }, 0);
              console.log(inputTotal, "costtt");
              const totalCost =
                Number(record.labour || 0) + inputTotal + activiteTotal;

              return (
                <tr key={index} className="border border-gray-300">
                  <td className="border border-gray-300 p-2">{record.email}</td>
                  <td className="border border-gray-300 p-2">
                    {new Date(record.created_at).toISOString().split("T")[0]}
                  </td>

                  <td className="border border-gray-300 p-2">
                    {new Date(record.created_at).getFullYear()}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {record.users_farms?.length || 0}
                  </td>
                  <td className="border border-gray-300 p-2"> {totalArea}</td>
                  <td className="border border-gray-300 p-2">
                    {" "}
                    {record.users_farms?.reduce(
                      (total, farm) => total + (farm.field_lists?.length || 0),
                      0
                    )}
                  </td>
                  <td className="border border-gray-300 p-2">{totalCost}</td>
                  <td className="border border-gray-300 p-2">
                    {record.profit}
                  </td>

                  <td className="border border-gray-300 p-2 text-center">
                    <Link to={"/openaccount"} className=" openfarm">
                      Open This Farm
                    </Link>
                  </td>
                </tr>
              );
            })}
            ;
          </tbody>
        </table>
      </div> */}
    </>
  );
}
export default UserHome;
