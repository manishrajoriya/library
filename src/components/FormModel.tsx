import React from 'react'
import MemberForm from './forms/studentForm'
import { getAllPlans } from '@/lib/action'
import DataCard from './DataCard'
import prisma from '@/lib/prisma'




export default async function MemberFormModal() {
        const plans = await getAllPlans()
    return (
        <div >
                <MemberForm plans={plans} />
        </div>
    )
}

export async function DataCardList() {
 
    const members = await prisma.member.findMany({
        include: {
            plan: {
                select: {
                    name: true,
                },
            },
        },
    });
    console.log(members);
    
    return (
        <div>
            {/* {members.map((member: Member) => (
                <div key={member.id}>
                    <DataCard 
                        name={member.name} 
                        address={member.address} 
                        contactNumber={member.contactNumber} 
                        addmissionDate={member.addmissionDate.toLocaleDateString()} 
                        expiryDate={member.expiryDate.toLocaleDateString()} 
                        seatNumber={member.seatNumber}
                        plan={member.plan?.name}
                        totalAmount={member.totalAmount}
                        amountPaid={member.amountPaid}
                        dueAmount={member.dueAmount}
                        id={member.id}
                        status={member.status}
                    />
                </div>
            ))} */}

            {members.map((member:{id:number,
             name:string,
              address:string| null, 
              contactNumber:string,
               addmissionDate:Date,
                expiryDate:Date,
                 seatNumber:number| null,
                  totalAmount:number| null,
                   amountPaid:number| null,
                    dueAmount:number| null,
                     status:"LIVE" | "EXPIRED",
                      
            }) => (
                <div key={member.id}>
                    <DataCard 
                        name={member.name} 
                        address={member.address || ''} 
                        contactNumber={member.contactNumber} 
                        addmissionDate={member.addmissionDate} 
                        expiryDate={member.expiryDate} 
                        seatNumber={member.seatNumber || 0}
                        // plan={member.plan?.name || ''}
                        totalAmount={member.totalAmount || 0}
                        amountPaid={member.amountPaid || 0}
                        dueAmount={member.dueAmount || 0}
                        id={member.id || 0}
                        status={member.status}
                    />
                </div>
           ))}
        </div>
    );
}


