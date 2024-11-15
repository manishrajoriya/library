
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
       {/* <UserCard logo='group.png' title='Totle Student' count={5}/> */}
       <UserCard logo='/delete.png' title='Deleted Student' count={3}/>
       <LiveMemberCard/>
       <InactiveMemberCard/>
       <TotalAmountPaidCard/>
       <TotalAmountCard/>
       <DueAmountCard/>
       <UserCard logo='/p&l.png' title='p&l' count={3}/>
       <UserCard logo='/sms.png' title='Message' count={3}/>
       <AddMemberCard/>
   </div>
   </div>
  )
}

export default page