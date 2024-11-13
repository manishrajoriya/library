import { getAllMembers } from "@/lib/action";
import UserCard from "./Card";


export default async function TotalMembers() {
    
    const members = await getAllMembers();

    return (
       <button title="Total Members" >
        <UserCard logo="group.png" title="Totle Student" count={members.length} />
       </button>
    )
}
