"use client"
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { useState } from 'react';
import { FiHome, FiUser, FiFolder, FiCalendar, FiFileText, FiBarChart2, FiMenu } from 'react-icons/fi';

export default function DashboardLayout({ children }:  Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out sm:translate-x-0`}
      >
        <div className="flex items-center justify-center h-16 bg-blue-600">
          <Image src="/sms.png" alt="Logo" className="h-8" />
        </div>
        <nav className="mt-5">
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <FiHome className="mr-2" /> Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <FiUser className="mr-2" /> Team
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <FiFolder className="mr-2" /> Projects
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <FiCalendar className="mr-2" /> Calendar
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <FiFileText className="mr-2" /> Documents
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <FiBarChart2 className="mr-2" /> Reports
          </a>
          <div className="mt-6 px-4">
            <h2 className="text-sm text-gray-500">Your teams</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center h-6 w-6 bg-gray-300 text-sm font-semibold text-gray-800 rounded-full mr-2">H</span>
                Heroicons
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center h-6 w-6 bg-gray-300 text-sm font-semibold text-gray-800 rounded-full mr-2">T</span>
                Tailwind Labs
              </li>
              <li className="flex items-center">
                <span className="inline-flex items-center justify-center h-6 w-6 bg-gray-300 text-sm font-semibold text-gray-800 rounded-full mr-2">W</span>
                Workcation
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Overlay for Sidebar on Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col sm:ml-64">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-4 bg-white shadow-sm sm:px-6">
          <div className="flex items-center space-x-4">
            <button title='Sidebar'
              className="text-gray-600 hover:text-gray-800 sm:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FiMenu className="w-6 h-6" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-xs px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button title='Notifications' className="p-2 text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405a1 1 0 00-1.415 0L15 17zm3.293-6.293a8 8 0 11-11.314 0 8 8 0 0111.314 0z" />
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <UserButton/>
              <span className="text-gray-700 hidden sm:block">Tom Cook</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-4 sm:p-6">
          <div className="w-full h-full border-dashed border-2 border-gray-300 bg-gray-50">{children}</div>
        </div>
      </main>
    </div>
  );
}
