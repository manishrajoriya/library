import { Card } from "@/components/ui/card"
import { ChevronDown, Plus, Video, Users, User, Home, Flag, Bookmark, Clock, Calendar, GamepadIcon, BarChart3, Newspaper, PlaySquare, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function SocialMenu() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-4">
      {/* Profile Section */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/placeholder.svg"
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-lg font-semibold">Mani Raj</span>
          </div>
          <ChevronDown className="h-6 w-6 text-gray-500" />
        </div>
      </Card>

      {/* Create Profile Section */}
      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Plus className="h-6 w-6 text-gray-500" />
          </div>
          <span className="text-lg">Create another profile</span>
        </div>
      </Card>

      {/* Switch Account Section */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/placeholder.svg"
                alt="Switch Account"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-lg">Switch account</span>
          </div>
          <ChevronDown className="h-6 w-6 text-gray-500" />
        </div>
      </Card>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {menuItems.map((item) => (
          <Card key={item.label} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-base sm:text-lg">{item.label}</span>
              </div>
              <span className="text-sm font-semibold bg-gray-100 px-2 py-1 rounded-full">{item.count}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

const menuItems = [
  { label: "Reels", icon: <PlaySquare className="w-6 h-6 text-pink-500" />, count: 12 },
  { label: "Messages", icon: <MessageCircle className="w-6 h-6 text-blue-500" />, count: 5 },
  { label: "Groups", icon: <Users className="w-6 h-6 text-blue-500" />, count: 3 },
  { label: "Friends", icon: <User className="w-6 h-6 text-blue-500" />, count: 287 },
  { label: "Video", icon: <Video className="w-6 h-6 text-blue-500" />, count: 8 },
  { label: "Marketplace", icon: <Home className="w-6 h-6 text-blue-500" />, count: 24 },
  { label: "Pages", icon: <Flag className="w-6 h-6 text-orange-500" />, count: 16 },
  { label: "Saved", icon: <Bookmark className="w-6 h-6 text-purple-500" />, count: 42 },
  { label: "Memories", icon: <Clock className="w-6 h-6 text-blue-500" />, count: 3 },
  { label: "Events", icon: <Calendar className="w-6 h-6 text-red-500" />, count: 2 },
  { label: "Games", icon: <GamepadIcon className="w-6 h-6 text-blue-500" />, count: 7 },
  { label: "Ads Manager", icon: <BarChart3 className="w-6 h-6 text-cyan-500" />, count: 1 },
  { label: "Feeds", icon: <Newspaper className="w-6 h-6 text-orange-500" />, count: 18 },
]

