import { useState } from "react";
import Button from "@mui/material/Button";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function UserList() {
    const initialData = [
        {
            name: "John Doe",
            dob: "123-456-7890",
            address: "35.123, -80.987",
            state: "35.123, -80.987",
            phone: "Loamy",
            fathername: "2025",
            gender: "20",
            idproof: "6.5",
        },
        {
            name: "John Doe",
            dob: "123-456-7890",
            address: "35.123, -80.987",
            state: "35.123, -80.987",
            phone: "Loamy",
            fathername: "2025",
            gender: "20",
            idproof: "6.5",
        }
    ];

    const [data, setData] = useState(initialData);



    return (
        <div className="p-4">
           <div className="d-flex gap-2 justify-content-between align-items-center">
             <div className="d-flex gap-2 justify-content-between align-items-center">
                <p className="m-0">Show</p>
           <input style={{height:"25px",width:"40px"}}>
          </input>
           <div className="d-grid">
            <ArrowDropUpIcon/>
           <ArrowDropDownIcon/>
           </div>
            <p className="m-0">Entries</p>
            </div>
            <div className="d-flex gap-2"><label>Search</label>
            <input type="search" />
            </div>
            </div>

            <table className="w-100 border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2"> Name</th>
                        <th className="border border-gray-300 p-2">Date Of Birth</th>
                        <th className="border border-gray-300 p-2">Mobile no.</th>
                        <th className="border border-gray-300 p-2"> Father/Husband Name</th>
                        <th className="border border-gray-300 p-2"> Address</th>
                        <th className="border border-gray-300 p-2"> State</th>
                        <th className="border border-gray-300 p-2">Gender</th>
                        <th className="border border-gray-300 p-2">ID Proof</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((record) => (
                        <tr key={record.id} className="border border-gray-300">
                            <td className="border border-gray-300 p-2">{record.name}</td>
                            <td className="border border-gray-300 p-2">{record.dob}</td>
                            <td className="border border-gray-300 p-2">{record.phone}</td>
                            <td className="border border-gray-300 p-2">{record.fathername}</td>
                            <td className="border border-gray-300 p-2">{record.address}</td>
                            <td className="border border-gray-300 p-2">{record.state}</td>
                            <td className="border border-gray-300 p-2">{record.gender}</td>
                            <td className="border border-gray-300 p-2">{record.idproof}</td>
                            <td className="border border-gray-300 p-2">
                                <Button variant="contained" color="success" className="w-25 me-2" >
                                   <EditIcon/> Edit
                                </Button>
                                <Button variant="contained" color="error" >
                                   <DeleteForeverIcon/> Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default UserList
