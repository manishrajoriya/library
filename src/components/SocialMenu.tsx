import { Card } from "@/components/ui/card"
import { ChevronDown, Plus } from "lucide-react"
import Image from "next/image"
import { Cards } from "./Data"
import Link from "next/link"

export default function SocialMenu() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-4">
      {/* Profile Section */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/lamp.png"
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-lg font-semibold">Manish Rajoriya</span>
          </div>
          <ChevronDown className="h-6 w-6 text-gray-500" />
        </div>
      </Card>

      {/* Create Profile Section */}
      <Card className="p-4">
        <div className="flex items-center gap-3">
            <Link href={'/addmember'}>
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Plus className="h-6 w-6 text-gray-500" />
          </div>
          </Link>
          <span className="text-lg">Add Member</span>
        </div>
      </Card>

      <div>
        <Cards/>
      </div>
      </div>
  )
}
  


