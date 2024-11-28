
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const AddMemberCard = () =>{
    
    return(
      <div>
        <div className="grid grid-cols-1 gap-4 mb-6">
    {/* <!-- Card items --> */}
    <Link href={'/addmember'}>
        <button title='Add Student' >
        <div className="flex items-center p-4 bg-white rounded-lg shadow">
            <Image width={6} height={6} src="/add.png" alt="Reels Icon" className="w-6 h-6 mr-2" />
            <span>Add Student</span>
        </div>
       </button>
     </Link>
    {/* <div className="flex items-center p-4 bg-white rounded-lg shadow">
      <img src="add.png" alt="Reels Icon" className="w-6 h-6 mr-2" />
      <span>Add Student</span>
    </div> */}
    
    
   
    {/* <!-- Repeat similar structure for other menu items --> */}
  </div>
      </div>
    )
}

export default AddMemberCard