import PlanForm from '@/components/forms/planForm'
import React from 'react'
import prisma from '@/lib/prisma'


export async function planPage() {
    const plans = await prisma.plan.findMany();
  return (
    <div>
     {/* <PlanForm/> */}
     <div>
        
            <div>
                <select name="Plans" title='Plans' id="plans">
                    <option value="">Select Plan</option>
                    {plans.map((plan) => (
                        <option key={plan.id} value={plan.name}>{plan.name}</option>
                    ))}
                </select>
            </div>

       
     </div>
    </div>
  )
}

export default planPage