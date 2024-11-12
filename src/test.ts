import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


export async function main() {
    

const user1 = await prisma.user.create({
    data:{
      email: "gkr3u@example.com",
      name: "admin",
      posts: {
        create: {
          title: "First Post",
          content: "Hello world",
          published: true
        }
      },
      
    },
    include: {
        posts: true
    }
   })

   console.log(user1);
   

}


  