import { Card } from "./ui/card";

type UserCardProps = {
  logo: React.ReactNode;
  title: string;
  count: number;
  className?: string;
};

const UserCard = ({ logo, title, count, className }: UserCardProps) => {
  return (
    <div className="p-2 sm:p-4">
      <Card
        className={`p-4 sm:p-6 transition-all hover:scale-105 ${className} 
        backdrop-blur-xl bg-opacity-95 border-none shadow-lg w-full max-w-xs sm:max-w-md`}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="p-2 sm:p-3 rounded-xl bg-white shadow-sm">
            {logo}
          </div>
          <div>
            <p className="text-xs sm:text-sm font-medium text-gray-600">{title}</p>
            <h3 className="text-xl sm:text-2xl font-semibold mt-1">{count}</h3>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserCard;
