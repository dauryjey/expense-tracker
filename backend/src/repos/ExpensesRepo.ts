import { IExpense } from "../models/expense"
import { new_ } from "../models/expense"
import orm from "./MockOrm"

async function getAll(): Promise<IExpense[]> {
	const db = await orm.openDb()
	return db.expenses
}

async function add(expense: IExpense): Promise<void> {
	const db = await orm.openDb()
	const newExpense = new_(expense.id, expense.description, expense.amount)
	db.expenses.push(newExpense)
	return await orm.saveDb(db)
}

async function deleteExpense(id: string): Promise<void> {
	const db = await orm.openDb()
	const expense = db.expenses.find((e) => e.id === id)

	if (!expense) {
		throw new Error("Expense not found")
	}

	db.expenses = db.expenses.filter((e) => e.id !== id)
	
	return await orm.saveDb(db)
}

async function getTotal(): Promise<number> {
	const db = await orm.openDb()
	return db.expenses.reduce((acc, e) => acc + e.amount, 0)
}

export default {
	getAll,
	add,
	deleteExpense,
	getTotal
} as const