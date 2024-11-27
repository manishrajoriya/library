import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getAllExpenses } from '@/lib/action'

async function ExpenseTable() {
    const expenses = await getAllExpenses();
  return (
    <div>
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Description</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  {
    expenses.map((expense) => (
      <TableBody key={expense.id}>
        <TableRow>
          <TableCell className="font-medium">INV{expense.id}</TableCell>
          <TableCell>{expense.date.toLocaleDateString()}</TableCell>
          <TableCell>{expense.description}</TableCell>
          <TableCell className="text-right">{expense.amount}</TableCell>
        </TableRow>
      </TableBody>
    ))
  }
</Table>

    </div>
  )
}

export default ExpenseTable