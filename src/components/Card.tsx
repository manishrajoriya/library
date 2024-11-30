import Image from "next/image";
import { Card } from "./ui/card";

type UserCardProps = {
  logo: React.ReactNode;
  title: string;
  count: number;
  className?: string;
};

const UserCard = ({ logo, title, count, className }: UserCardProps) => {
  return (
    <div className="p-2">
     <Card className={`p-6 transition-all hover:scale-105 ${className} backdrop-blur-xl bg-opacity-95 border-none shadow-lg`}>
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-white shadow-sm">
          {logo}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{count}</h3>
        </div>
      </div>
    </Card>
    </div>
  );
};

export default UserCard;
