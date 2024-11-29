import Image from "next/image";

type UserCardProps = {
  logo: string;
  title: string;
  count: number;
};

const UserCard = ({ logo, title, count }: UserCardProps) => {
  return (
    <div className="p-2">
      <div className="relative h-32 w-32 sm:h-40 sm:w-40 bg-white dark:bg-neutral-900 shadow-custom shadow-green-100  rounded-lg p-4 border border-gray-200 dark:border-neutral-700">
        {/* Logo Section */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full overflow-hidden mb-2">
          <Image
            width={100}
            height={100}
            src={logo}
            alt={`${title} Logo`}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Title */}
        <h3 className="text-center text-sm sm:text-base text-gray-800 dark:text-gray-200 font-semibold mb-1">
          {title}
        </h3>

        {/* Count */}
        <p className="text-center text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
          {count}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
