import { useEffect, useRef, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { USER } from "../../../config/endpoints";

function UserHome() {
  const [profile, setProfile] = useState(false);
const [userlist,setUserList] = useState([])
  const initialData = [
    {
      farmaccount: "upinderjitsingh@gmail.com",
      created: "29-02-2025",
      year: "2025",
      farm: "4",
      area: "24",
      fields: "5",
      expenditure: "200000",
      profit: "800000",
    },
    {
      farmaccount: "upinderjitsingh@gmail.com",
      created: "29-02-2025",
      year: "2025",
      farm: "4",
      area: "24",
      fields: "5",
      expenditure: "200000",
      profit: "800000",
    },
  ];
  const dropdownoneRef = useRef(null);

  const access_token = localStorage.getItem("access_token");

//   const fetchALLUser = async () => {
//     try {
//    const respponse = await axios.get(`${USER.ALL_USER_LIST}`, {
//         headers: {
//           access_token: access_token,
//         },
//       });


// console.log(respponse,"my response")
//       if(respponse.status===200){
//         // setUserList()
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchALLUser();
//   }, []);

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
  const [data, setData] = useState(initialData);

  return (
    <>
      <nav>
        <div className="profile-dropdown" ref={dropdownoneRef}>
          <button onClick={() => setProfile(true)} className="profile-btn">
            Menu
          </button>
          <div
            className="dropdown-btn"
            style={{ display: `${profile ? "block" : "none"}` }}
          >
            <button className="drop-set">
              <a href="/account" className="p-0">
                Profile
              </a>
            </button>
            <button className="drop-set">
              <a href="/openaccount" className="p-0">
                Open Fram
              </a>
            </button>
            <button className="drop-set" onClick={() => userlogout()}>
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="user_card border-collapse border border-gray-300 ms-2 shadow">
        <div className="d-flex justify-content-between pb-2">
          <p className="fs-5">Upinderjitsingh32@gmail.com</p>
          <img className="head_pic" src="img/farm1.png" />
        </div>
        <div className="bg-white rounded">
          <div className="d-flex p-2">
            <div className="d-flex">
              <img className="pic_size" src="img/created.png" />
              <p className="m-0 ps-3">Created</p>
            </div>
            <div></div>
          </div>
          <hr className="hor-line m-0"></hr>
          <div className="d-flex justify-content-between p-2">
            <div className="d-flex ">
              <img className="pic_size" src="img/default_year.png" />
              <p className="m-0 ps-3">Default Crop Season</p>
            </div>
            <div>
              <select className="drop_color">
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
              </select>
            </div>
          </div>

          <hr className="hor-line m-0"></hr>
          <div className="d-flex p-2">
            <img className="pic_size" src="img/farm4.png" />
            <p className="m-0 ps-3">Farm(s)</p>
          </div>
          <hr className="hor-line m-0"></hr>
          <div className="d-flex p-2">
            <img className="pic_size" src="img/field.png" />
            <p className="m-0 ps-3">Fields</p>
          </div>

          <hr className="hor-line m-0"></hr>
          <div className="d-flex p-2">
            <img className="pic_size" src="img/last_connect.png" />
            <p className="m-0 ps-3">Last session</p>
          </div>
        </div>
        <div className="d-flex  justify-content-between pt-3">
          <button className="rounded-5 border-0 p-2 bt_color1 text-white">
            Leave this farm
          </button>
          <button className="rounded-5 border-0 p-2 fw-semibold bt_color text-white">
            Open this farm
          </button>
        </div>
      </div>

      <div className="p-4 vh-100">
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
            {data.map((record) => (
              <tr key={record.id} className="border border-gray-300">
                <td className="border border-gray-300 p-2">
                  {record.farmaccount}
                </td>
                <td className="border border-gray-300 p-2">{record.created}</td>
                <td className="border border-gray-300 p-2">{record.year}</td>
                <td className="border border-gray-300 p-2">{record.farm}</td>
                <td className="border border-gray-300 p-2">{record.area}</td>
                <td className="border border-gray-300 p-2">{record.fields}</td>
                <td className="border border-gray-300 p-2">
                  {record.expenditure}
                </td>
                <td className="border border-gray-300 p-2">{record.profit}</td>

                <td className="border border-gray-300 p-2 text-center">
                  <Link to={"/openaccount"} className=" openfarm">
                    Open This Farm
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default UserHome;
