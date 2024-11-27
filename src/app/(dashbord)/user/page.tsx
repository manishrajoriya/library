
import UserCard from '@/components/Card'
import {TotalMembers, TotalAmountPaidCard, TotalAmountCard, DueAmountCard, LiveMemberCard, InactiveMemberCard} from '@/components/Data'
import AddMemberCard from '@/components/addMemberCard'
import Link from 'next/link'
import React from 'react'



function page() {

  
  return (
    <div>
      
   <div className=' flex flex-wrap justify-center gap-5 mt-3'>
      <Link href={'/members'}>
       <TotalMembers/>
       </Link>
       <LiveMemberCard/>
       <InactiveMemberCard/>
       <TotalAmountPaidCard/>
       <TotalAmountCard/>
       <DueAmountCard/>
       <UserCard logo='/p&l.png' title='p&l' count={3}/>
       <UserCard logo='/p&l.png' title='Expence' count={3}/>
       <UserCard logo='/sms.png' title='Message' count={3}/>
       <AddMemberCard/>
   </div>
   </div>
  )
}

export default page