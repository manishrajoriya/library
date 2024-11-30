// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
// import { Pencil, Plus, RefreshCw, Receipt, MapPin, Phone, Calendar } from 'lucide-react'

// interface MemberCardProps {
//   name: string
//   address: string
//   id: string
//   seatNo: string
//   contact: string
//   joinDate: string
//   endDate: string
//   plan: string
//   finalAmount: number
//   paidAmount: number
//   dueAmount: number
//   isExpired?: boolean
// }

// export default function MemberCard({
//   name = 'Unknown Member',
//   address,
//   id,
//   seatNo,
//   contact,
//   joinDate,
//   endDate,
//   plan,
//   finalAmount,
//   paidAmount,
//   dueAmount,
//   isExpired = false,
// }: MemberCardProps) {
//   return (
//     <Card className="w-full max-w-md overflow-hidden transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white via-gray-50 to-blue-50 border-none">
//       <CardHeader className="p-6 pb-0">
//         <div className="flex items-start justify-between">
//           <div className="flex items-center gap-4">
//             <Avatar className="h-20 w-20 border-4 border-white shadow-xl">
//               <AvatarImage src="/placeholder.svg" />
//               <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white text-2xl font-bold">
//                 {name ? name.split(' ').map(n => n[0]).join('') : '?'}
//               </AvatarFallback>
//             </Avatar>
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 leading-tight">{name}</h2>
//               <div className="flex items-center mt-1 text-gray-600">
//                 <MapPin className="h-4 w-4 mr-1" />
//                 <p className="text-sm">{address}</p>
//               </div>
//               <div className="flex items-center mt-1 text-gray-600">
//                 <Phone className="h-4 w-4 mr-1" />
//                 <p className="text-sm">{contact}</p>
//               </div>
//             </div>
//           </div>
//           <div className="text-right">
//             <Badge variant={isExpired ? "destructive" : "secondary"} className="font-semibold text-xs mb-2">
//               {isExpired ? 'EXPIRED' : 'ACTIVE'}
//             </Badge>
//             <p className="text-sm font-medium text-gray-600">ID: {id}</p>
//             <p className="text-sm font-medium text-gray-600 mt-1">Seat: {seatNo}</p>
//           </div>
//         </div>
//       </CardHeader>

//       <CardContent className="p-6">
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div className="space-y-1">
//             <p className="text-xs font-medium text-gray-500">Plan</p>
//             <p className="font-semibold text-gray-900">{plan}</p>
//           </div>
//           <div className="space-y-1">
//             <p className="text-xs font-medium text-gray-500">Join Date</p>
//             <div className="flex items-center">
//               <Calendar className="h-4 w-4 mr-1 text-blue-500" />
//               <p className="font-semibold text-gray-900">{joinDate}</p>
//             </div>
//           </div>
//           <div className="space-y-1">
//             <p className="text-xs font-medium text-gray-500">End Date</p>
//             <div className="flex items-center">
//               <Calendar className="h-4 w-4 mr-1 text-red-500" />
//               <p className="font-semibold text-gray-900">{endDate}</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-xl shadow-inner">
//           <div className="text-center">
//             <p className="text-xs text-gray-500 mb-1">Final Amount</p>
//             <p className="font-bold text-lg text-gray-900">${finalAmount}</p>
//           </div>
//           <div className="text-center border-x border-gray-100">
//             <p className="text-xs text-gray-500 mb-1">Paid Amount</p>
//             <p className="font-bold text-lg text-green-600">${paidAmount}</p>
//           </div>
//           <div className="text-center">
//             <p className="text-xs text-gray-500 mb-1">Due Amount</p>
//             <p className={`font-bold text-lg ${dueAmount > 0 ? 'text-red-600' : 'text-gray-900'}`}>
//               ${dueAmount}
//             </p>
//           </div>
//         </div>
//       </CardContent>

//       <CardFooter className="px-6 py-4 bg-gray-50 border-t border-gray-100 gap-2">
//         <Button variant="outline" size="sm" className="flex-1 bg-white hover:bg-gray-50">
//           <Pencil className="h-4 w-4 mr-2" />
//           Edit
//         </Button>
//         <Button variant="outline" size="sm" className="flex-1 bg-white hover:bg-gray-50">
//           <Plus className="h-4 w-4 mr-2" />
//           Add Pay
//         </Button>
//         <Button variant="outline" size="sm" className="flex-1 bg-white hover:bg-gray-50">
//           <RefreshCw className="h-4 w-4 mr-2" />
//           Renew
//         </Button>
//         <Button variant="outline" size="sm" className="flex-1 bg-white hover:bg-gray-50">
//           <Receipt className="h-4 w-4 mr-2" />
//           Add Bill
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }

// // Example usage
// export function ExampleCard() {
//   return (
//     <div className="p-8 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen flex items-center justify-center">
//       <MemberCard
//         name="Manish Rajoriya"
//         address="Dausa"
//         id="41"
//         seatNo="1"
//         contact="8764296129"
//         joinDate="29/11/2024"
//         endDate="29/12/2024"
//         plan="m2"
//         finalAmount={0}
//         paidAmount={400}
//         dueAmount={0}
//         isExpired={true}
//       />
//     </div>
//   )
// }



import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Pencil, Plus, RefreshCw, Receipt, MapPin, Phone, Calendar, CalendarClock } from 'lucide-react'
import { memberSchemaType } from "@/lib/schemas"


export default function MemberCard2({
   id,
  name,
  address,
  contactNumber,
  addmissionDate,
  expiryDate,
  seatNumber,
  plan,
  totalAmount,
  amountPaid,
  dueAmount,
  status,
}: memberSchemaType) {
  return (
    <Card className="w-full m-3 max-w-md overflow-hidden transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white via-gray-50 to-blue-50 border-none">
      <CardHeader className="p-4 sm:p-6 pb-0">
        <div className="flex  items-start justify-between">
          <div className="flex items-center gap-4 ">
            <Avatar className="h-16 w-16 sm:h-20 sm:w-20 border-4 border-white shadow-xl">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white text-xl sm:text-2xl font-bold">
                {name ? name.split(' ').map(n => n[0]).join('') : '?'}
              </AvatarFallback>
            </Avatar>
            <div className="">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">{name}</h2>
              <div className="flex items-center mt-1 text-gray-600">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <p className="text-xs sm:text-sm">{address}</p>
              </div>
              <div className="flex items-center mt-1 text-gray-600">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <p className="text-xs sm:text-sm">{contactNumber}</p>
              </div>
              
            </div>
          </div>
          <div className="text-right ">
            <Badge variant={status == "EXPIRED" ? "destructive" : "secondary"} className="font-semibold text-xs mb-2">
              {status == "EXPIRED" ? 'EXPIRED' : 'ACTIVE'}
            </Badge>
            <p className="text-xs sm:text-sm font-medium text-gray-600">ID: {id}</p>
            <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">Seat: {seatNumber}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-6">
        {/* <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="space-y-1">
            <p className="text-xs font-medium text-gray-500">Join Date</p>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-blue-500" />
              <p className="font-semibold text-sm sm:text-base text-gray-900">{joinDate}</p>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-medium text-gray-500">End Date</p>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-red-500" />
              <p className="font-semibold text-sm sm:text-base text-gray-900">{endDate}</p>
            </div>
          
          </div>
        </div> */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-inner">
          <div className="text-center">
            <p className="text-xs font-medium text-gray-500">Plan</p>
            <p className="font-semibold text-sm sm:text-base text-gray-900">{plan}</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-medium text-gray-500">Join Date</p>
            <p className="font-semibold text-sm sm:text-base text-gray-900">{addmissionDate.toLocaleDateString()}</p>
          </div>
          <div className="text-center border-x border-gray-100">
            <p className="text-xs font-medium text-gray-500">End Date</p>
            <p className="font-semibold text-sm sm:text-base text-gray-900">{expiryDate.toLocaleDateString()}</p>
          </div>
          
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-inner">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">Final Amount</p>
            <p className="font-bold text-base sm:text-lg text-gray-900">${totalAmount}</p>
          </div>
          <div className="text-center border-x border-gray-100">
            <p className="text-xs text-gray-500 mb-1">Paid Amount</p>
            <p className="font-bold text-base sm:text-lg text-green-600">${amountPaid}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">Due Amount</p>
            <p className={`font-bold text-base sm:text-lg ${dueAmount  ? 'text-red-600' : 'text-gray-900'}`}>
              ${dueAmount }
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-4 py-3 sm:px-6 sm:py-4 bg-gray-50 border-t border-gray-100 gap-2 flex-wrap">
        <Button variant="outline" size="sm" className="flex-1 min-w-[calc(50%-0.25rem)] sm:min-w-0 bg-white hover:bg-gray-50 text-xs sm:text-sm">
          <Pencil className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
          Edit
        </Button>
        <Button variant="outline" size="sm" className="flex-1 min-w-[calc(50%-0.25rem)] sm:min-w-0 bg-white hover:bg-gray-50 text-xs sm:text-sm">
          <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
          Add Pay
        </Button>
        <Button variant="outline" size="sm" className="flex-1 min-w-[calc(50%-0.25rem)] sm:min-w-0 bg-white hover:bg-gray-50 text-xs sm:text-sm">
          <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
          Renew
        </Button>
        <Button variant="outline" size="sm" className="flex-1 min-w-[calc(50%-0.25rem)] sm:min-w-0 bg-white hover:bg-gray-50 text-xs sm:text-sm">
          <Receipt className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
          Add Bill
        </Button>
      </CardFooter>
    </Card>
  )
}

// Example usage



