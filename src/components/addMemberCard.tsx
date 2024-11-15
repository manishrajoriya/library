"use client"
import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import PlanForm from './forms/planForm'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


const AddMemberCard = () =>{
    const router = useRouter();
    return(
      <div>
        <div className="grid grid-cols-1 gap-4 mb-6">
    {/* <!-- Card items --> */}
        <button onClick={() =>router.push("/addMember") }>
        <div className="flex items-center p-4 bg-white rounded-lg shadow">
            <Image width={6} height={6} src="/add.png" alt="Reels Icon" className="w-6 h-6 mr-2" />
            <span>Add Student</span>
        </div>
       </button>

    {/* <div className="flex items-center p-4 bg-white rounded-lg shadow">
      <img src="add.png" alt="Reels Icon" className="w-6 h-6 mr-2" />
      <span>Add Student</span>
    </div> */}
    <Popover>
    <PopoverTrigger>
    <div className="flex items-center p-4 bg-white rounded-lg shadow">
      <Image width={6} height={6} src="/add.png" alt="Messages Icon" className="w-6 h-6 mr-2" />
      <span>Add Plan</span>
    </div>
    </PopoverTrigger>
        <PopoverContent><PlanForm /></PopoverContent>
    </Popover>
    
   
    {/* <!-- Repeat similar structure for other menu items --> */}
  </div>
      </div>
    )
}

export default AddMemberCard