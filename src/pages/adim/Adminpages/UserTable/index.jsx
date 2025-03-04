import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function UserList() {
    const [initialData,setIntitialData] = useState([
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
            name: "vaibhav",
            dob: "123-456-7890",
            address: "35.123, -80.987",
            state: "35.123, -80.987",
            phone: "Loamy",
            fathername: "2025",
            gender: "20",
            idproof: "6.5",
        },
        {
            name: "joshi",
            dob: "123-456-7890",
            address: "35.123, -80.987",
            state: "35.123, -80.987",
            phone: "Loamy",
            fathername: "2025",
            gender: "20",
            idproof: "6.5",
        }
    ]);

    

 const handeldelete=(name) =>{
    const updatedata = initialData.filter((initial) => initial.name !== name);
    setIntitialData(updatedata);
 };


    return (
        <div className="p-4">
           <div className="d-flex gap-2 justify-content-between align-items-center">
             <div className="d-flex gap-2 justify-content-between align-items-center">
                <p className="m-0">Show</p>
           <input type="number" style={{height:"25px",width:"40px"}}/>
          
           <div className="d-grid">
           
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
                    {initialData.map((record) => (
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
                                <Button variant="contained" color="success" className="w-25 me-2 pe-3" >
                                   <EditIcon/> Edit
                                </Button>
                                <Button onClick = {() => handeldelete(record.name)} variant="contained" color="error" >
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
