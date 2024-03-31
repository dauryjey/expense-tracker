import { IIncome } from "../models/income"
import { new_ } from "../models/income"
import orm from "./MockOrm"

async function getAll(): Promise<IIncome[]> {
	const db = await orm.openDb()
	return db.incomes
}

async function add(income: IIncome): Promise<void> {
	const db = await orm.openDb()
	const newExpense = new_(income.id, income.description, income.amount)
	db.incomes.push(newExpense)
	return await orm.saveDb(db)
}

async function deleteExpense(id: string): Promise<void> {
	const db = await orm.openDb()
	const income = db.incomes.find((e) => e.id === id)

	if (!income) {
		throw new Error("Expense not found")
	}

	db.incomes = db.incomes.filter((e) => e.id !== id)
	
	return await orm.saveDb(db)
}

async function getTotal(): Promise<number> {
	const db = await orm.openDb()
	return db.incomes.reduce((acc, e) => acc + e.amount, 0)
}

export default {
	getAll,
	add,
	getTotal,
	deleteExpense
} as const