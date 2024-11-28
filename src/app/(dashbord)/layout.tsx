import { SidebarDemo } from '@/components/sidebar'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      
      <SidebarDemo children={children}/>
      </div>
  )
}

export default layout