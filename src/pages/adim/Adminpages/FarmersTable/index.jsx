import { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import  {Link}  from "react-router-dom";
import "./style.css"
function FarmerList() {
    const initialData = [
        {
            id: 1,
            name: "John Doe",
            email: "123-456-7890",
            address: "35.123, -80.987",
            phone: "Loamy",
            year: "2025",
            area: "20",
            registrationdate: "6.5",
            status: "Pests",
            action: "25%",
        },
        {
            id: 2,
            name: "upinder",
            email: "123-456-7890",
            address: "35.123, -80.987",
            phone: "Loamy",
            year: "2025",
            area: "20",
            registrationdate: "6.5",
            status: "Pests",
            action: "25%",
        }
    ];

    const [data, setData] = useState(initialData);



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
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2"> Name</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Phone</th>
                        <th className="border border-gray-300 p-2"> Address</th>
                        <th className="border border-gray-300 p-2"> Year</th>
                        <th className="border border-gray-300 p-2">Area</th>
                        <th className="border border-gray-300 p-2"> Registration Date</th>
                        <th className="border border-gray-300 p-2">Status</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((record) => (
                        <tr key={record.id} className="border border-gray-300">
                            <td className="border border-gray-300 p-2">{record.id}</td>
                            <td className="border border-gray-300 p-2">{record.name}</td>
                            <td className="border border-gray-300 p-2">{record.email}</td>
                            <td className="border border-gray-300 p-2">{record.phone}</td>
                            <td className="border border-gray-300 p-2">{record.address}</td>
                            <td className="border border-gray-300 p-2">{record.year}</td>
                            <td className="border border-gray-300 p-2">{record.area}</td>
                            <td className="border border-gray-300 p-2">{record.registrationdate}</td>
                            <td className="border border-gray-300 p-2">{record.status}</td>
                            <td className="border border-gray-300 p-2 text-center">
                                <Link  to={`/admin/farmerdetails/${record.name}`}  className="link-edit me-2" >
                                   <VisibilityIcon/> View Details
                                </Link>
                                <Link className="link-edit me-2 bg-danger" >
                                   <DeleteForeverIcon/> Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default FarmerList
