"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Plan, planSchema } from '@/lib/schemas';
import { createPlan } from '@/lib/action';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';



function PlanForm() {
  // Initialize the form with Zod schema validation
  const { register, handleSubmit, formState: { errors } } = useForm<Plan>({
    resolver: zodResolver(planSchema),
  });

  const onSubmit = (data: Plan) => {
    createPlan({data});
     setTimeout(() => {
         window.location.reload(); // Refresh the page to load new data
      }, 1000);
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <Input
          type="text"
          {...register('name')}
          className="input"
          placeholder="Shift Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <Textarea
          {...register('description')}
          className="input"
          placeholder="Optional description"
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Duration (in days)</label>
        <Input
          type="number"
          {...register('duration', { valueAsNumber: true })}
          className="input"
          placeholder="Duration in days"
        />
        {errors.duration && <p className="text-red-500">{errors.duration.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <Input
          type="number"
          step="100"
          {...register('amount', { valueAsNumber: true })}
          placeholder="Amount"
        />
        {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
      </div>

      <Button type="submit" variant={'default'}>
        Submit
      </Button>
    </form>
  );
}

export default PlanForm;
