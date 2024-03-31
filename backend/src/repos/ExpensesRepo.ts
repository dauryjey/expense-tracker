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

export default {
	getAll,
	add
} as const