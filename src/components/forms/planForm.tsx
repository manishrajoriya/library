"use client";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Plan, planSchema } from '@/lib/schemas';
import { createPlan } from '@/lib/action';



function PlanForm() {
  // Initialize the form with Zod schema validation
  const { register, handleSubmit, formState: { errors } } = useForm<Plan>({
    resolver: zodResolver(planSchema),
  });

  const onSubmit = (data: Plan) => {
    createPlan({data});
    console.log(data);
    // Handle form submission, e.g., send data to an API or save in a database
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          {...register('name')}
          className="input"
          placeholder="Plan Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          {...register('description')}
          className="input"
          placeholder="Optional description"
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Duration (in days)</label>
        <input
          type="number"
          {...register('duration', { valueAsNumber: true })}
          className="input"
          placeholder="Duration in days"
        />
        {errors.duration && <p className="text-red-500">{errors.duration.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          step="100"
          {...register('amount', { valueAsNumber: true })}
          className="input"
          placeholder="Amount"
        />
        {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
      </div>

      {/* <div>
        <label className="block text-sm font-medium text-gray-700">Members</label>
        <input
          
          type="text"
          {...register('members')}
          className="input"
          placeholder="Add members (based on your Member structure)"
        />
        {errors.members && <p className="text-red-500">{errors.members.message}</p>}
      </div> */}

      <button type="submit" className="btn-primary">
        Submit
      </button>
    </form>
  );
}

export default PlanForm;
