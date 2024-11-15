import React from 'react'
import { getAllPlans } from '@/lib/action';



export default async function plans() {
 const plans  = await getAllPlans();
  
    // const plan = await prisma.plan.findMany();
    // console.log('Fetched plans:', plans);
    
 
  return (
    <div className="grid grid-cols-1 gap-4 mb-6">
        {plans.map((plan) => (
            <div key={plan.id} className="flex flex-col p-4 bg-white rounded-lg shadow">
                <ol className="list-inside list-decimal text-sm text-left">
                    <li key={plan.id}>{plan.name}</li>
                    <li key={plan.id}>{plan.description}</li>
                    <li key={plan.id}>{plan.duration}</li>
                    <li key={plan.id}>{plan.amount}</li>
                </ol>
            </div>
        ))}
    </div>
  )
}

