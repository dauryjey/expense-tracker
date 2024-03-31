import { check } from "express-validator"
import { IExpense } from "../models/expense"
import ExpensesRepo from "../repos/ExpensesRepo"

const validators = [
	check("description").isString().withMessage("Description must be a string"),
	check("amount")
		.isFloat({ min: 0.01 })
		.withMessage("Amount must be a number and greater than 0"),
]

function addOne (expense: IExpense): Promise<void> {
	return ExpensesRepo.add(expense)
}

export default {
	addOne,
	validators,
} as const
