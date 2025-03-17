import { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import  {Link}  from "react-router-dom";
function AdminCropList() {
    const initialData = [
        {
            id: 1,
            name: "John Doe",
            farm: "35.123, -80.987",
            field: "Loamy",
            crop: "123-456-7890",
            variety: "2025",
            area: "20",
            expectedyield: "6.5",
            price: "Pests",
            action: "25%",
        },
    ];

    const [data, setData] = useState(initialData);



    return (
        <div className="p-4">
           <div className="d-flex gap-2 justify-content-between align-items-center">
             <div className="d-flex gap-2  align-items-center">
                <p className="m-0">Show</p>
           <input type="number" style={{height:"25px",width:"40px"}}/>
          
            </div>
            <div className="d-flex gap-2 "><label>Search</label>
            <input type="search" />
            </div>
                     
           
            </div>
            <table className="w-100 border-collapse border border-gray-300 mt-2">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2"> Name</th>
                        <th className="border border-gray-300 p-2">Farm</th>
                        <th className="border border-gray-300 p-2">Field</th>
                        <th className="border border-gray-300 p-2"> Crop</th>
                        <th className="border border-gray-300 p-2"> Variety</th>
                        <th className="border border-gray-300 p-2">Area</th>
                        <th className="border border-gray-300 p-2">Expected Yield</th>
                        <th className="border border-gray-300 p-2">Price</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((record) => (
                        <tr key={record.id} className="border border-gray-300">
                            <td className="border border-gray-300 p-2">{record.id}</td>
                            <td className="border border-gray-300 p-2">{record.name}</td>
                            <td className="border border-gray-300 p-2">{record.farm}</td>
                            <td className="border border-gray-300 p-2">{record.field}</td>
                            <td className="border border-gray-300 p-2">{record.crop}</td>
                            <td className="border border-gray-300 p-2">{record.variety}</td>
                            <td className="border border-gray-300 p-2">{record.area}</td>
                            <td className="border border-gray-300 p-2">{record.expectedyield}</td>
                            <td className="border border-gray-300 p-2">{record.price}</td>
                            <td className="border border-gray-300 p-2 text-center">
                                <Link className="link-edit me-2 bg-success" >
                                   <EditIcon/> 
                                </Link>
                                <Link className="link-edit me-2 bg-danger" >
                                   <DeleteForeverIcon/> 
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default AdminCropList
