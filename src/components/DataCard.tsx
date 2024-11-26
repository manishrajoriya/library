import React from 'react'
import {  memberSchemaType } from '@/lib/schemas';





function DataCard({
 id,
 name,
 address,
 contactNumber,
 addmissionDate,
 expiryDate,
 seatNumber,
 plan,
 totalAmount,
 amountPaid,
 dueAmount,
 status
  }: memberSchemaType
  
) {
  return (
    <div className='  m-2 '>
    <div className=" rounded-lg p-4 w-80 shadow-md shadow-zinc-900 bg-white">
      <div className="flex justify-between">
    {/* <!-- Profile Picture and Info --> */}
    <div className="flex items-center space-x-3">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
        {/* <!-- Placeholder for Profile Picture --> */}
        <span className="text-2xl font-semibold text-gray-700">👤</span>
      </div>
      <div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-gray-500 text-sm">Address</div>
        <div className="text-sm text-gray-700">{address}</div>
        <div className="text-sm text-gray-500">Contact Number</div>
        <div className="flex items-center text-blue-500 space-x-1">
          <span>{contactNumber}</span>
        </div>
      </div>
    </div>

    {/* <!-- Member ID and Seat Number --> */}
    <div className="text-center">
      <div className="text-lg font-semibold">{status}</div>
      <div className="text-gray-500">{id}</div>
      <div className="text-gray-500 text-xs">Student id</div>
      <div className="text-red-500 mt-2">{seatNumber}</div>
      <div className="text-gray-500 text-xs">Seat No</div>
    </div>
  </div>

  {/* <!-- Join Date and End Date --> */}
  <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
    <div>
      <div>Join Date</div>
      <div className="font-semibold text-black">{addmissionDate.toLocaleDateString()}</div>
    </div>
    <div>
      <div>End Date</div>
      <div className="font-semibold text-black">{expiryDate.toLocaleDateString()}</div>
    </div>
  </div>

  {/* <!-- Plan and Payment Info --> */}
  <div className="mt-4 grid grid-cols-3 gap-2 text-sm text-gray-600">
    <div>
      <div>Plan</div>
      <div className="font-semibold text-black">{plan}</div>
    </div>
    <div>
      <div>Final Amt</div>
      <div className="font-semibold text-black">{totalAmount}</div>
    </div>
    <div>
      <div>Paid Amt</div>
      <div className="font-semibold text-black">{amountPaid}</div>
    </div>
  </div>

  {/* <!-- Due Amount --> */}
  <div className="mt-4 flex items-center">
    <div className="text-sm text-gray-600">Due</div>
    <div className="ml-2 px-2 py-1 rounded-md bg-red-500 text-white font-semibold">{dueAmount}</div>
  </div>

  {/* <!-- Action Buttons --> */}
  {/* <div className="mt-4 flex justify-around text-red-500 text-sm">
    <button className="flex flex-col items-center">
      <span>👤</span>
      <span>Profile</span>
    </button>
    <button className="flex flex-col items-center">
      <span>🆔</span>
      <span>ID-Card</span>
    </button>
    <button className="flex flex-col items-center">
      <span>✏️</span>
      <span>Edit</span>
    </button>
    <button className="flex flex-col items-center">
      <span>💵</span>
      <span>Add Pay</span>
    </button>
    <button className="flex flex-col items-center">
      <span>🔄</span>
      <span>Renew</span>
    </button>
    <button className="flex flex-col items-center">
      <span>🧾</span>
      <span>Add Bill</span>
    </button>
  </div> */}
</div>

    </div>

    
  )
}

export default DataCard
