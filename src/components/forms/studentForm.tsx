"use client"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { createMember } from '@/lib/action';
import { Input } from '../ui/input';




// Define the Zod schema for the Member model
export const memberSchema = z.object({
  id: z.coerce.number().positive().optional(),
  name: z.string().min(1, 'Name is required'),
  address: z.string().optional(),
  contactNumber: z.string().min(10, 'Contact Number is required').max(15),
  email: z.string().optional(),
  addmissionDate: z.coerce.date(), // using string for date inputs
  expiryDate: z.coerce.date(),
  totalAmount: z.coerce.number().optional(),
  amountPaid: z.coerce.number().optional(),
  dueAmount: z.coerce.number().optional(),
  status: z.enum(['LIVE', 'EXPIRED']).default('LIVE'),
  seatNumber: z.coerce.number().positive().optional(),
  
  planId: z.coerce.number().positive().optional(),
  profileImage: z.string().optional(),
});

// Define TypeScript type based on the Zod schema
type MemberFormData = z.infer<typeof memberSchema>;

// Add a type for the plans prop
type Plan = {
    id: number;
    name: string;
    
}

type PlanFormProps = {
  plans: Plan[];
};

export default  function MemberForm({plans}: PlanFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<MemberFormData>({
    resolver: zodResolver(memberSchema),
  });

  

  
  const onSubmit = (data: MemberFormData) => {
    createMember({data});
    console.log(data);
    // Handle form submission, e.g., send data to an API or save in a database
  };

  return (
    <div className='flex justify-center w-[90%] sm:w-1/2'>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <Input
          type="text"
          {...register('name')}
          className="input "
          placeholder="Full Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <Input
          type="text"
          {...register('address')}
          className="input"
          placeholder="Address"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Contact Number</label>
        <Input
          type="text"
          {...register('contactNumber')}
          className="input"
          placeholder="Contact Number"
        />
        {errors.contactNumber && <p className="text-red-500">{errors.contactNumber.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <Input
          type="email"
          {...register('email')}
          className="input"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Admission Date</label>
        <Input
          type="date"
          {...register('addmissionDate')}
          className="input"
        />
        {errors.addmissionDate && <p className="text-red-500">{errors.addmissionDate.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
        <Input
          type="date"
          {...register('expiryDate')}
          className="input"
        />
        {errors.expiryDate && <p className="text-red-500">{errors.expiryDate.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select {...register('status')} className="input h-9 w-full px-3 py-1 rounded-md outline-1">
          <option value="LIVE">Live</option>
          <option value="EXPIRED">Inactive</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Seat Number</label>
        <Input
          type="number"
          {...register('seatNumber')}
          className="input"
          placeholder="Seat Number"
        />
        {errors.seatNumber && <p className="text-red-500">{errors.seatNumber.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Total Amount</label>
        <Input
          type="number"
          {...register('totalAmount')}
          className="input"
          placeholder="Total Amount"
        />
        {errors.totalAmount && <p className="text-red-500">{errors.totalAmount.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Paid Amount</label>
        <Input
          type="number"
          {...register('amountPaid')}
          className="input"
          placeholder="Paid Amount"
        />
        {errors.amountPaid && <p className="text-red-500">{errors.amountPaid.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Due Amount</label>
        <Input
          type="number" 
          {...register('dueAmount')}
          className="input"
          placeholder="Due Amount"
        />
        {errors.dueAmount && <p className="text-red-500">{errors.dueAmount.message}</p>}
      </div>

     <div>
        <label className="block text-sm font-medium text-gray-700">Plan</label>
        <select
          {...register('planId', { valueAsNumber: true })} // Register as a number
          className="input h-9 w-full px-3 py-1 rounded-md outline-1"
        >
          <option value="" >Select Plan</option>
          {plans.map((plan) => (
            <option  key={plan.id} value={plan.id}>
              {plan.name}
            </option>
          ))}
        </select>
        {errors.planId && <p className="text-red-500">{errors.planId.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Profile Image URL</label>
        <Input
          
          type="url"
          {...register('profileImage')}
          className="input"
          placeholder="Profile Image URL"
        />
        {errors.profileImage && <p className="text-red-500">{errors.profileImage.message}</p>}
      </div>

      <button type="submit" className="btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
}
