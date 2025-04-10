import React, { useState } from 'react'
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

function FarmerPersonalDetailsTable({ heading, data }) {
    const [close, setClose] = useState(true);
    const [minimize, setMinimize] = useState(true);
    if (!close) return null;

    return (
        <div className='userdashboardtable1 shadow my-3 '>
            <div className='dash-title d-flex justify-content-between'>
                <h5 className='pt-1 ps-2'>{heading}</h5>
                <div>
                    {
                        minimize ?
                            <MinimizeIcon className='pb-1' onClick={() => setMinimize(false)} style={{ cursor: "pointer" }} />
                            :
                            <AddIcon className='pt-2' onClick={() => setMinimize(true)} style={{ cursor: "pointer" }} />
                    }
                    <CloseIcon className='pt-2 text-danger' onClick={() => setClose(false)} style={{ cursor: "pointer" }} />
                </div>
            </div>
            {minimize && (
                <table className="w-100 border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 p-2">Farmer Name</th>
                            <th className="border border-gray-300 p-2"> Father/Husband Name</th>
                            <th className="border border-gray-300 p-2"> Date-of-Birth</th>
                            <th className="border border-gray-300 p-2"> Mobile No.</th>
                            <th className="border border-gray-300 p-2"> Distict</th>
                            <th className="border border-gray-300 p-2"> Address</th>
                            <th className="border border-gray-300 p-2"> Block</th>
                            <th className="border border-gray-300 p-2"> ID Proof</th>


                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (

                            <tr key={index} className="border border-gray-300">
                                <td className="border border-gray-300 p-2">{item.FarmId}</td>
                                <td className="border border-gray-300 p-2">{item.FarmName}</td>
                                <td className="border border-gray-300 p-2">{item.Type}</td>
                                <td className="border border-gray-300 p-2">{item.Created}</td>
                                <td className="border border-gray-300 p-2">{item.Owner}</td>
                                <td className="border border-gray-300 p-2">{item.Fields}</td>
                                <td className="border border-gray-300 p-2">{item.Acre}</td>
                                <td className="border border-gray-300 p-2">{item.Active}</td>

                            </tr>
                        ))}


                    </tbody>
                </table>
            )}
        </div>
    )
}

export default FarmerPersonalDetailsTable
