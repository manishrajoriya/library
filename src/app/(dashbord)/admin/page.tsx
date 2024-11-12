"use client"
import React from 'react'
import ProfileForm from '../test/page'
import { createAdmin } from '@/lib/action'
import { main } from '@/test'

const admin = {
    id: 1,
    username: "admin",
    password: "admin",
    email: "gkr3u@example.com",
}


 function page() {
    const submit = async (data: any) => {
        console.log(data)
         createAdmin({data})
        main()
    }

   



  return (
    <div>
        <button
        onClick={() => submit(admin)}
        >Submit</button>
        <ProfileForm/>
    </div>
  )
}

export default page