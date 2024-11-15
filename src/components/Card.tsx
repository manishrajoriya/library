import Image from "next/image";




type UserCardProps = {
  logo: string;
  title: string;
  count: number;
};

const UserCard =  ({logo, title, count}:UserCardProps) => {
   
  return (
    <div >
        <div className="relative h-32 w-32 sm:w-40 sm:h-40  bg-white shadow-md shadow-zinc-900 rounded-lg p-4">
            <div className="w-10 h-10 sm:w-16 sm:h-16 mx-auto rounded-full overflow-hidden mb-2">
            <Image width={100} height={100} src={logo} alt="Placeholder Image" className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-center text-xs sm:text-base text-title font-semibold mb-1">{title}</h3>
            
            <p className="text-center text-subTitle text-sm">{count}</p>
            
        </div>
    </div>
  );
};




  


export default UserCard; 
 