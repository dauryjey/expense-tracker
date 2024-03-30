import { IExpense } from "../models/expense"
import ExpensesRepo from "../repos/ExpensesRepo"

function addOne (expense: IExpense): Promise<void> {
	return ExpensesRepo.add(expense)
}

export default {
	addOne,
} as const
