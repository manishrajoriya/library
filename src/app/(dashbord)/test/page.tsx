import { Card } from "@/components/ui/card"
import { Users, UserCheck, UserX, DollarSign, CreditCard, Clock, TrendingDown, TrendingUp, Home, LayoutDashboard, Settings, Calendar, MessagesSquare, Github, Twitter } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white/80 backdrop-blur-xl border-r border-gray-100 p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-black rounded-lg"></div>
          <h1 className="font-semibold text-xl">Acet Labs</h1>
        </div>

        <nav className="flex-1">
          <div className="space-y-1">
            <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
            <NavItem icon={<Users size={20} />} label="Add Member" />
            <NavItem icon={<Settings size={20} />} label="Settings" />
            <NavItem icon={<Calendar size={20} />} label="Shifts" />
          </div>
        </nav>

        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <MessagesSquare size={20} />
          </div>
          <div>
            <h3 className="font-medium text-sm">Manu Arora</h3>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pl-64 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            icon={<Users className="text-blue-500" />}
            title="Total Students"
            value="2"
            className="bg-blue-50/50"
          />
          <MetricCard
            icon={<UserCheck className="text-green-500" />}
            title="Live Members"
            value="1"
            className="bg-green-50/50"
          />
          <MetricCard
            icon={<UserX className="text-red-500" />}
            title="Inactive Members"
            value="1"
            className="bg-red-50/50"
          />
          <MetricCard
            icon={<DollarSign className="text-purple-500" />}
            title="Paid Amount"
            value="800"
            className="bg-purple-50/50"
          />
          <MetricCard
            icon={<CreditCard className="text-indigo-500" />}
            title="Total Amount"
            value="0"
            className="bg-indigo-50/50"
          />
          <MetricCard
            icon={<Clock className="text-orange-500" />}
            title="Due Amount"
            value="0"
            className="bg-orange-50/50"
          />
          <MetricCard
            icon={<TrendingDown className="text-rose-500" />}
            title="P&L"
            value="-1200"
            className="bg-rose-50/50"
          />
          <MetricCard
            icon={<TrendingUp className="text-emerald-500" />}
            title="Total Expense"
            value="1200"
            className="bg-emerald-50/50"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <ActionButton icon={<Home size={20} />} />
          <ActionButton icon={<LayoutDashboard size={20} />} />
          <ActionButton icon={<Users size={20} />} />
          <ActionButton icon={<MessagesSquare size={20} />} />
          <ActionButton icon={<Settings size={20} />} />
          <ActionButton icon={<Twitter size={20} />} />
          <ActionButton icon={<Github size={20} />} />
        </div>
      </main>
    </div>
  )
}

function MetricCard({ icon, title, value, className = "" }: { icon: React.ReactNode; title: string; value: string; className?: string }) {
  return (
    <Card className={`p-6 transition-all hover:scale-105 ${className} backdrop-blur-xl bg-opacity-95 border-none shadow-lg`}>
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-white shadow-sm">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
        </div>
      </div>
    </Card>
  )
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button
      className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors
        ${active 
          ? "bg-black text-white" 
          : "text-gray-600 hover:bg-gray-100"
        }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  )
}

function ActionButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
      {icon}
    </button>
  )
}

