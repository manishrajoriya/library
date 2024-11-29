import { FloatingDockDemo } from '@/components/floatingDock'
import { GridBackgroundDemo } from '@/components/gridbg'
import { SidebarDemo } from '@/components/sidebar'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      
      <SidebarDemo>
        <FloatingDockDemo />
        {children}
        </SidebarDemo>
      
      </div>
  )
}

export default layout