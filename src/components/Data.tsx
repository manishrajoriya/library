
import UserCard from "./Card";
import prisma from "@/lib/prisma";


export  async function TotalMembers() {
    
    const membersCount = await prisma.member.count();

    return (
       <button type="button" title="Total Members" >
        <UserCard logo="/group.png" title="Totle Student" count={membersCount} />
       </button>
    )
}

export  async function TotalAmountPaidCard() {
    
    const result = await prisma.member.aggregate({
        _sum: {
            amountPaid: true,
        },
    })
    const totalPaidAmount = result._sum.amountPaid|| 0;
    console.log("amount paid",totalPaidAmount);
    
    return (
       <button title="Paid Amount" >
        <UserCard logo="/collection.png" title="Paid Amount" count={totalPaidAmount} />
       </button>
    )

}

export  async function TotalAmountCard() {
    
    const result = await prisma.member.aggregate({
        _sum: {
            totalAmount: true,
        },
    })
    const totalAmount = result._sum.totalAmount|| 0;
    console.log("total amount", totalAmount);
    
    return (
       <button title="Total Amount" >
        <UserCard logo="/expence.png" title="Total Amount" count={totalAmount} />
       </button>
    )

}

export  async function DueAmountCard() {
    
    const result = await prisma.member.aggregate({
        _sum: {
            dueAmount: true,
        },
    })
    const totalDueAmount = result._sum.dueAmount|| 0;
    console.log("amount due",totalDueAmount);
    
    return (
       <button title="Due Amount" >
        <UserCard logo="/due.png" title="Due Amount" count={totalDueAmount} />
       </button>
    )

}

export async function LiveMemberCard() {
    
    const result = await prisma.member.count({
        where:{
            status:"LIVE"
        }
    })
    console.log("live members",result);
    
    return (
       <button title="Live Members" >
        <UserCard logo="/people3.png" title="Live Members" count={result} />
       </button>
    )
}

export async function InactiveMemberCard() {
    const result = await prisma.member.count({
        where:{
            status:"EXPIRED"
        }
    })
    console.log("inactive members",result);
    return (
       <button title="inactive Members" >
        <UserCard logo="/delete.png" title="Inactive Members" count={result} />
       </button>
    )
}


