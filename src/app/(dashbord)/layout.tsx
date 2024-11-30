import { FloatingDockDemo } from '@/components/floatingDock'
import { GridBackgroundDemo } from '@/components/gridbg'
import { SidebarDemo } from '@/components/sidebar'
import { UserProvider } from '@/lib/userId'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      
      <SidebarDemo>
        <FloatingDockDemo />
        <UserProvider>
        {children}
        </UserProvider>
        </SidebarDemo>
      
      </div>
  )
}

export default layout