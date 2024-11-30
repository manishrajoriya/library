import React from 'react'
import { DataCardList } from '@/components/FormModel'
import MemberCard from '../test2/page'
import MemberCard2 from '@/components/v0card'

function page() {
  return (
    <>
    <div className='flex flex-row justify-center'>
      <DataCardList/>
      
    </div>
    <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <MemberCard
        name="Manish Rajoriya"
        address="Dausa"
        id="41"
        seatNo="1"
        contact="8764296129"
        joinDate="29/11/2024"
        endDate="29/12/2024"
        plan="m2"
        finalAmount={0}
        paidAmount={400}
        dueAmount={0}
        isExpired={true}
      />
    </div>
    <div className="p-4 sm:p-8 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen flex items-center justify-center">
      <MemberCard2
        name="Manish Rajoriya"
        address="Dausa"
        id="41"
        seatNo="1"
        contact="8764296129"
        joinDate="29/11/2024"
        endDate="29/12/2024"
        plan="m2"
        finalAmount={0}
        paidAmount={400}
        dueAmount={0}
        isExpired={true}
      />
    </div>
    </>
  )
}

export default page