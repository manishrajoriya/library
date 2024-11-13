import React from 'react'
import { getAllPlans } from '@/lib/action';



export default async function plans() {
 const plans  = await getAllPlans();
  
    // const plan = await prisma.plan.findMany();
    // console.log('Fetched plans:', plans);
    
 
  return (
    <div>
      
        {plans.map((plan) => (
            <div>
            <ol>
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

