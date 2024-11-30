import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Pencil, Plus, RefreshCw, Receipt } from 'lucide-react'

interface MemberCardProps {
  name: string
  address: string
  id: string
  seatNo: string
  contact: string
  joinDate: string
  endDate: string
  plan: string
  finalAmount: number
  paidAmount: number
  dueAmount: number
  isExpired?: boolean
}

export default function MemberCard({
  name,
  address,
  id,
  seatNo,
  contact,
  joinDate,
  endDate,
  plan,
  finalAmount,
  paidAmount,
  dueAmount,
  isExpired = false,
}: MemberCardProps) {
  return (
    <Card className="w-full max-w-md overflow-hidden transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-gray-50/50">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-white shadow-lg">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white text-xl">
                {name}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
                {isExpired && (
                  <Badge variant="destructive" className="font-semibold">
                    EXPIRED
                  </Badge>
                )}
              </div>
              <p className="text-gray-500 mt-1">{address}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">ID: {id}</p>
            <p className="text-sm text-gray-600 mt-1">Seat No: {seatNo}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600">Contact Number</p>
            <p className="text-blue-600 font-medium">{contact}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600">Plan</p>
            <p className="font-medium text-gray-900">{plan}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600">Join Date</p>
            <p className="font-medium text-gray-900">{joinDate}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600">End Date</p>
            <p className="font-medium text-gray-900">{endDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Final Amt</p>
            <p className="font-semibold text-gray-900">${finalAmount}</p>
          </div>
          <div className="text-center border-x border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Paid Amt</p>
            <p className="font-semibold text-green-600">${paidAmount}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Due</p>
            <Badge variant={dueAmount > 0 ? "destructive" : "secondary"} className="font-semibold">
              ${dueAmount}
            </Badge>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 bg-gray-50 border-t border-gray-100 gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <Pencil className="h-4 w-4 mr-2" />
          Edit
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Plus className="h-4 w-4 mr-2" />
          Add Pay
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <RefreshCw className="h-4 w-4 mr-2" />
          Renew
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Receipt className="h-4 w-4 mr-2" />
          Add Bill
        </Button>
      </CardFooter>
    </Card>
  )
}

// Example usage
export function ExampleCard() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <MemberCard
        name="Manish Rajoriya"
        address="Dausa"
        id="41"
        seatNo="1"
        contact="8764296129"
        joinDate="29/11/2024"
        endDate="29/12/2024"
        plan="m2"
        finalAmount={0}
        paidAmount={400}
        dueAmount={0}
        isExpired={true}
      />
    </div>
  )
}

