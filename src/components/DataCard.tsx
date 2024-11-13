import React from 'react'







function DataCard({name, address, contactNumber, addmissionDate, expiryDate, seatNumber}:any) {
  return (
    <div>
        <div className="border-2 border-red-200 rounded-lg p-4 w-80 shadow-md">
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
      <div className="text-gray-500">2</div>
      <div className="text-gray-500 text-xs">Memid</div>
      <div className="text-red-500 mt-2">{seatNumber}</div>
      <div className="text-gray-500 text-xs">Seat No</div>
    </div>
  </div>

  {/* <!-- Join Date and End Date --> */}
  <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
    <div>
      <div>Join Date</div>
      <div className="font-semibold text-black">{addmissionDate}</div>
    </div>
    <div>
      <div>End Date</div>
      <div className="font-semibold text-black">{expiryDate}</div>
    </div>
  </div>

  {/* <!-- Plan and Payment Info --> */}
  <div className="mt-4 grid grid-cols-3 gap-2 text-sm text-gray-600">
    <div>
      <div>Plan</div>
      <div className="font-semibold text-black">hello</div>
    </div>
    <div>
      <div>Final Amt</div>
      <div className="font-semibold text-black">480</div>
    </div>
    <div>
      <div>Paid Amt</div>
      <div className="font-semibold text-black">470</div>
    </div>
  </div>

  {/* <!-- Due Amount --> */}
  <div className="mt-4 flex items-center">
    <div className="text-sm text-gray-600">Due</div>
    <div className="ml-2 px-2 py-1 rounded-md bg-red-500 text-white font-semibold">10</div>
  </div>

  {/* <!-- Action Buttons -->
  <div className="mt-4 flex justify-around text-red-500 text-sm">
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
    </button> */}
  </div>
</div>

    
  )
}

export default DataCard
