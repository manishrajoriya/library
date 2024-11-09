import React from 'react'
import ProfileForm from '../test/page'
import { createAdmin } from '@/lib/action'

const admin = {
    id: "1",
    username: "admin",
    password: "admin",
    email: "admin",
}


function page() {
    const submit = async (data: any) => {
        console.log(data)
        await createAdmin({data})
    }
  return (
    <div>
        <button
        onClick={() => submit(admin)}
        >Submit</button>
        
    </div>
  )
}

export default page