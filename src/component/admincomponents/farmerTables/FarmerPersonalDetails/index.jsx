import React from 'react'
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';

function FarmerPersonalDetailsTable({ heading, data }) {
    return (
        <div className='userdashboardtable1 shadow my-3 '>
            <div className='dash-title d-flex justify-content-between'>
                <h5 className='pt-1 ps-2'>{heading}</h5>
                <div>
                    <MinimizeIcon className='pb-1' />
                    <CloseIcon className='pt-2 text-danger' />
                </div>
            </div>
            <table className="w-100 border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2">First Name</th>
                        <th className="border border-gray-300 p-2"> Second Name</th>
                        <th className="border border-gray-300 p-2"> Father/Husband Name</th>
                        <th className="border border-gray-300 p-2"> Date-of-Birth</th>
                        <th className="border border-gray-300 p-2"> Gender</th>
                        <th className="border border-gray-300 p-2"> Country</th>
                        <th className="border border-gray-300 p-2"> City</th>
                        <th className="border border-gray-300 p-2"> Pin Code</th>
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

        </div>
    )
}

export default FarmerPersonalDetailsTable
