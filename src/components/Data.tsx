import {
  Clock,
  CreditCard,
  DollarSign,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
  UserX,
} from "lucide-react";
import UserCard from "./Card";
import {
  countMembers,
  liveMembersCount,
  inactiveMembersCount,
  totalAmountCount,
  dueAmountCount,
  paidAmountCount,
  ExpensesCount,
} from "@/lib/action";
import { Card } from "./ui/card";

// Add a helper function at the top of the file
function formatCount(count: number | { success: boolean; message: string }) {
  if (typeof count === 'number') {
    return count;
  }
  return 0; // Return 0 or some default value if the count is an error object
}

export async function Cards() {
  // Fetching all counts
  const [
    membersCount,
    paidAmount,
    totalAmount,
    dueAmount,
    liveMembers,
    inactiveMembers,
    expenses,
  ] = await Promise.all([
    countMembers(),
    paidAmountCount(),
    totalAmountCount(),
    dueAmountCount(),
    liveMembersCount(),
    inactiveMembersCount(),
    ExpensesCount(),
  ]);

  // Card configuration array
  const cardData = [
    {
      logo: <Users className="text-blue-500" />,
      title: "Total Members",
      count: formatCount(membersCount),
      className: "bg-blue-50/50",
    },
    {
      logo: <UserCheck className="text-green-500" />,
      title: "Live Members",
      count: formatCount(liveMembers),
      className: "bg-green-50/50",
    },
    {
      logo: <UserX className="text-red-500" />,
      title: "Inactive Members",
      count: formatCount(inactiveMembers),
      className: "bg-red-50/50",
    },
    {
      logo: <CreditCard className="text-indigo-500" />,
      title: "Total Amount",
      count: formatCount(totalAmount),
      className: "bg-indigo-50/50",
    },
    {
      logo: <DollarSign className="text-purple-500" />,
      title: "Paid Amount",
      count: formatCount(paidAmount),
      className: "bg-purple-50/50",
    },
    {
      logo: <Clock className="text-orange-500" />,
      title: "Due Amount",
      count: formatCount(dueAmount),
      className: "bg-orange-50/50",
    },
    {
      logo: <TrendingUp className="text-emerald-500" />,
      title: "Total Expense",
      count: formatCount(expenses),
      className: "bg-emerald-50/50",
    },
    {
      logo: <TrendingDown className="text-rose-500" />,
      title: "P&L",
      count: formatCount(paidAmount) - formatCount(expenses),
      className: "bg-rose-50/50",
    },
  ];

  // Render cards dynamically
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cardData.map((card, index) => (
        <button key={index} title={card.title}>
         <Card key={card.title} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  {card.logo}
                </div>
                <span className="text-base sm:text-lg">{card.title}</span>
              </div>
              <span className="text-sm font-semibold bg-gray-100 px-2 py-1 rounded-full">{card.count}</span>
            </div>
          </Card>
        </button>
      ))}
    </div>
  );
}


