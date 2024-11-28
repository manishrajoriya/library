import PlanForm from '@/components/forms/planForm'
import PlansData from '@/components/plans'
import React from 'react'

function page() {
  return (
    <div className=' justify-center w-[75%] m-auto '>
        <PlanForm/>
        <PlansData/>
    </div>
  )
}

export default page