import React from 'react'
import { getAllPlans } from '@/lib/action';


export default async function getAllPlan() {
 const plans  = await getAllPlans();
  
    // const plan = await prisma.plan.findMany();
    // console.log('Fetched plans:', plans);
    
 
  return (
    <div>
        {plans.map((plan) => (
            <div>
                <ol>
            <li key={plan.name}>{plan.name}</li>
            <li key={plan.description}>{plan.description}</li>
            <li key={plan.duration}>{plan.duration}</li>
            </ol>
            </div>
            ))}
    </div>
  )
}

