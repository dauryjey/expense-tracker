import { v4 as uuidv4 } from "uuid"
import { IExpense } from "../models/expense"
import orm from "./MockOrm"

async function getAll(): Promise<IExpense[]> {
	const db = await orm.openDb()
	return db.expenses
}

async function add(expense: IExpense): Promise<void> {
	const db = await orm.openDb()
	expense.id = uuidv4()
	db.expenses.push(expense)
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

export default {
	getAll,
	add,
	deleteExpense
} as const