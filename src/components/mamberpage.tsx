// pages/members.tsx

import MemberForm from '@/app/(dashbord)/test/page';
import prisma from '@/lib/prisma';


export async function getServerSideProps() {
  const plans = await prisma.plan.findMany(); // Fetch plans on the server side

  return {
    props: {
      plans,
    },
  };
}



export default function MemberPage({ plans }) {
  return (
    <div>
      <h1>Register Member</h1>
      <MemberForm plans={plans} /> {/* Pass plans as a prop to MemberForm */}
    </div>
  );
}
