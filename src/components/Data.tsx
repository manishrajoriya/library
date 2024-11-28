import UserCard from "./Card";
import { countMembers, 
    liveMembersCount, 
    inactiveMembersCount,
    totalAmountCount, 
    dueAmountCount,
    paidAmountCount,
    ExpensesCount
  } from "@/lib/action";

export  async function TotalMembers() {
    
   const membersCount = await countMembers();

    return (
       <button type="button" title="Total Members" >
        <UserCard logo="/group.png" title="Totle Student" count={membersCount} />
       </button>
    )
}

export  async function TotalAmountPaidCard() {
  const Count = await paidAmountCount();
    return (
       <button title="Paid Amount" >
        <UserCard logo="/collection.png" title="Paid Amount" count={Count} />
       </button>
    )

}

export  async function TotalAmountCard() {
    const Count = await totalAmountCount();
    return (
       <button title="Total Amount" >
        <UserCard logo="/expence.png" title="Total Amount" count={Count} />
       </button>
    )

}

export  async function DueAmountCard() {
  const Count = await dueAmountCount();
    return (
       <button title="Due Amount" >
        <UserCard logo="/due.png" title="Due Amount" count={Count} />
       </button>
    )

}

export async function LiveMemberCard() {
   const Count = await liveMembersCount();
    return (
       <button title="Live Members" >
        <UserCard logo="/people3.png" title="Live Members" count={Count} />
       </button>
    )
}

export async function InactiveMemberCard() {
   const Count = await inactiveMembersCount();
    return (
       <button title="inactive Members" >
        <UserCard logo="/delete.png" title="Inactive Members" count={Count} />
       </button>
    )
}

export async function ExpenseCountCard() {
   const Count = await ExpensesCount();
    return (
       <button title="Total Expense" >
        <UserCard logo="/p&l.png" title="Total Expense" count={Count } />
       </button>
    )
}

export async function PLCard() {
   const Count = await ExpensesCount();
   const total = await totalAmountCount();
    return (
       <button title="profit and loss" >
        <UserCard logo="/p&l.png" title="P&L" count={total - Count } />
       </button>
    )
}
