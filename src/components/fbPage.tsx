import React from 'react'

export default function fbPage() {
  return (
    <div>
    <div className="bg-gray-100 min-h-screen p-4">
  {/* <!-- Menu header -- */}
  <div className="flex items-center space-x-2 mb-4">
    <button className="text-lg font-semibold">←</button>
    <h1 className="text-lg font-semibold">Menu</h1>
  </div>

  {/* <!-- Main grid menu --> */}
  <div className="grid grid-cols-2 gap-4 mb-6">
    {/* <!-- Card items --> */}
    <div className="flex items-center p-4 bg-white rounded-lg shadow">
      <img src="path-to-icon" alt="Reels Icon" className="w-6 h-6 mr-2" />
      <span>Reels</span>
    </div>
    <div className="flex items-center p-4 bg-white rounded-lg shadow">
      <img src="path-to-icon" alt="Messages Icon" className="w-6 h-6 mr-2" />
      <span>Messages</span>
    </div>
    {/* <!-- Repeat similar structure for other menu items --> */}
  </div>

  {/* <!-- Settings & Privacy Section --> */}
  <div className="space-y-4">
    <h2 className="text-gray-600 font-semibold">Settings & privacy</h2>
    <div className="flex items-center p-4 bg-white rounded-lg shadow">
      <img src="path-to-icon" alt="Settings Icon" className="w-6 h-6 mr-2" />
      <span>Settings</span>
    </div>
    <div className="flex items-center p-4 bg-white rounded-lg shadow">
      <img src="path-to-icon" alt="Facebook Pay Icon" className="w-6 h-6 mr-2" />
      <span>Facebook Pay</span>
    </div>
    <div className="flex items-center p-4 bg-white rounded-lg shadow">
      <img src="path-to-icon" alt="Dark Mode Icon" className="w-6 h-6 mr-2" />
      <span>Dark mode</span>
      <input title='Dark Mode' type="checkbox" className="ml-auto toggle-switch"/>
    </div>
  </div>
</div>
    </div>
  )
}

