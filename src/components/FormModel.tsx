import React from 'react'
import MemberForm from './forms/studentForm'
import { getAllPlans, getAllMembers } from '@/lib/action'
import DataCard from './DataCard'

export default async function MemberFormModal() {
        const plans = await getAllPlans()
    return (
        <div >
                <MemberForm plans={plans} />
        </div>
    )
}

export async function DataCardList() {
    const members = await getAllMembers();
    return (
        <div>
            {members.map((member: any) => (
                <div key={member.id}>
                    <DataCard 
                        name={member.name} 
                        address={member.address} 
                        contactNumber={member.contactNumber} 
                        addmissionDate={member.addmissionDate.toLocaleDateString()} 
                        expiryDate={member.expiryDate.toLocaleDateString()} 
                        seatNumber={member.seatNumber}
                    />
                </div>
            ))}
        </div>
    );
}


