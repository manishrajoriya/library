import React from 'react'
import { StudentCard } from '@/components/StudentCard'


function page() {
  return (
    <>
    <div className="p-4 sm:p-8  bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen flex items-center justify-center">
     <StudentCard/>
    </div>
    </>
  )
}

export default page