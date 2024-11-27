import React from 'react'
import ExpenseForm from '@/components/forms/expenseForm'
import ExpenseTable from '@/components/ExpenseTable'

function page() {
  return (
    <div>
        <ExpenseForm/>
        <ExpenseTable/>
    </div>
  )
}

export default page