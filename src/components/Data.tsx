
import UserCard from "./Card";
import prisma from "@/lib/prisma";


export default async function TotalMembers() {
    
    const membersCount = await prisma.member.count();

    return (
       <button title="Total Members" >
        <UserCard logo="group.png" title="Totle Student" count={membersCount} />
       </button>
    )
}

