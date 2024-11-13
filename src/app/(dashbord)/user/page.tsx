import UserCard from '@/components/Card'
import TotalMembers from '@/components/Data'

import React from 'react'

type Props = {
  logo: string
  title: string
  count: number
}
function page() {
  
  
  return (
    <div>
      
   <div className=' flex flex-wrap justify-center gap-5 mt-3'>
       <TotalMembers/>
       {/* <UserCard logo='group.png' title='Totle Student' count={5}/> */}
       <UserCard logo='delete.png' title='Deleted Student' count={3}/>
       <UserCard logo='people3.png' title='Expiring 3 Days' count={5}/>
       <UserCard logo='people5.png' title='Expiring 5 Days' count={3}/>
       <UserCard logo='collection.png' title='Totle Collection' count={5}/>
       <UserCard logo='expence.png' title='Total Expence' count={3}/>
       <UserCard logo='due.png' title='Due' count={3}/>
       <UserCard logo='p&l.png' title='p&l' count={3}/>
       <UserCard logo='sms.png' title='Message' count={3}/>
   </div>
   </div>
  )
}

export default page