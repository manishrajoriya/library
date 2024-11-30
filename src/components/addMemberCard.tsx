
import React from 'react'

import { Card } from './ui/card'
import { Plus } from 'lucide-react'


const AddMemberCard = () =>{
    
    return(
      <div>
      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Plus className="h-6 w-6 text-gray-500" />
          </div>
          <span className="text-lg">Add Member</span>
        </div>
       </Card>
      </div>
      
    )
}

export default AddMemberCard

    