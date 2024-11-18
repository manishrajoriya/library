import { getAuth } from "@clerk/nextjs/server";

import React from 'react'

async function handler(req, res) {
    const { userId } =  getAuth(req);
    console.log(userId); 
    
  return (
    <div>page</div>
  )
}


export default handler