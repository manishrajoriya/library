import { Clock, CreditCard, DollarSign, TrendingDown, TrendingUp, UserCheck, Users, UserX } from "lucide-react";
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
        <UserCard 
        logo={<Users className="text-blue-500" />}
        title="Totle Student" 
        count={membersCount} 
        className="bg-blue-50/50"
        />
       </button>
    )
}

export  async function TotalAmountPaidCard() {
  const Count = await paidAmountCount();
    return (
       <button title="Paid Amount" >
        <UserCard 
        logo={<DollarSign className="text-purple-500" />} 
        title="Paid Amount" 
        count={Count} 
        className="bg-purple-50/50"
        />
       </button>
    )

}

export  async function TotalAmountCard() {
    const Count = await totalAmountCount();
    return (
       <button title="Total Amount" >
        <UserCard 
        logo={<CreditCard className="text-indigo-500" />}
        title="Total Amount" 
        count={Count} 
        className="bg-indigo-50/50"
        />
       </button>
    )

}

export  async function DueAmountCard() {
  const Count = await dueAmountCount();
    return (
       <button title="Due Amount" >
        <UserCard 
        logo={<Clock className="text-orange-500" />}
        title="Due Amount" 
        count={Count}
        className="bg-orange-50/50"
        />
       </button>
    )

}

export async function LiveMemberCard() {
   const Count = await liveMembersCount();
    return (
       <button title="Live Members" >
        <UserCard 
        logo={<UserCheck className="text-green-500" />} 
        title="Live Members" 
        count={Count} 
        className="bg-green-50/50"
        />
       </button>
    )
}

export async function InactiveMemberCard() {
   const Count = await inactiveMembersCount();
    return (
       <button title="inactive Members" >
        <UserCard 
        logo={<UserX className="text-red-500" />}
        title="Inactive Members" 
        count={Count} 
        className="bg-red-50/50"
        />
       </button>
    )
}

export async function ExpenseCountCard() {
   const Count = await ExpensesCount();
    return (
       <button title="Total Expense" >
        <UserCard 
        logo={<TrendingUp className="text-emerald-500" />}
        title="Total Expense" 
        count={Count } 
        className="bg-emerald-50/50"
        />
       </button>
    )
}

export async function PLCard() {
   const Count = await ExpensesCount();
   const total = await totalAmountCount();
    return (
       <button title="profit and loss" >
        <UserCard 
        logo={<TrendingDown className="text-rose-500" />} 
        title="P&L" 
        count={total - Count } 
        className="bg-rose-50/50"
        />
       </button>
    )
}
