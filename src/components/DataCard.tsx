import React from "react";
import { memberSchemaType } from "@/lib/schemas";

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
  status,
}: memberSchemaType) {
  return (
    <div className="m-2">
      <div className="rounded-lg p-4 max-w-sm  shadow-custom shadow-green-100 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700">
        {/* Header Section */}
        <div className="flex justify-between">
          {/* Profile Info */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-2xl font-semibold text-gray-700">👤</span>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-800">{name}</div>
              <div className="text-sm text-gray-500">Address</div>
              <div className="text-sm text-gray-700">{address}</div>
              <div className="text-sm text-gray-500">Contact Number</div>
              <div className="text-sm text-blue-500">{contactNumber}</div>
            </div>
          </div>

          {/* Status and ID */}
          <div className="text-center">
            <div className={`text-lg font-semibold ${status === "LIVE" ? "text-green-500" : "text-red-500"}`}>
              {status}
            </div>
            <div className="text-gray-500 text-sm">ID: {id}</div>
            <div className="mt-2 text-gray-500 text-xs">Seat No: {seatNumber}</div>
          </div>
        </div>

        {/* Dates Section */}
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-gray-500">Join Date</div>
            <div className="font-semibold text-gray-800">{addmissionDate.toLocaleDateString()}</div>
          </div>
          <div>
            <div className="text-gray-500">End Date</div>
            <div className="font-semibold text-gray-800">{expiryDate.toLocaleDateString()}</div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-gray-500">Plan</div>
            <div className="font-semibold text-gray-800">{plan}</div>
          </div>
          <div>
            <div className="text-gray-500">Final Amt</div>
            <div className="font-semibold text-gray-800">${totalAmount}</div>
          </div>
          <div>
            <div className="text-gray-500">Paid Amt</div>
            <div className="font-semibold text-gray-800">${amountPaid}</div>
          </div>
        </div>

        {/* Due Amount */}
        <div className="mt-4 flex items-center">
          <div className="text-sm text-gray-600">Due</div>
          <div className="ml-2 px-2 py-1 rounded-md bg-red-500 text-white font-semibold">${dueAmount}</div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-between">
          {[
            { label: "Edit", icon: "✏️" },
            { label: "Add Pay", icon: "💵" },
            { label: "Renew", icon: "🔄" },
            { label: "Add Bill", icon: "🧾" },
          ].map((action, index) => (
            <button
              key={index}
              className="flex flex-col items-center text-gray-600 hover:text-gray-800"
              aria-label={action.label}
            >
              <span>{action.icon}</span>
              <span className="text-xs">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DataCard;
