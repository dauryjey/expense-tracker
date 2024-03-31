import { check } from "express-validator"
import { IIncome } from "../models/income"
import IncomesRepo from "../repos/IncomesRepo"

const validators = [
	check("description").isString().withMessage("Description must be a string"),
	check("amount")
		.isFloat({ min: 0.01 })
		.withMessage("Amount must be a number and greater than 0"),
]

function retrieveAll (): Promise<IIncome[]> {
	return IncomesRepo.getAll()
}

function addOne (expense: IIncome): Promise<void> {
	return IncomesRepo.add(expense)
}

function deleteOne (id: string): Promise<void> {
	return IncomesRepo.deleteExpense(id)
}

export default {
	addOne,
	retrieveAll,
	deleteOne,
	validators
} as const
