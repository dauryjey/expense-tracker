import { IExpense } from "../models/expense"
import orm from "./MockOrm"

async function add(expense: IExpense): Promise<void> {
	const db = await orm.openDb()
	db.expenses.push(expense)
	return await orm.saveDb(db)
}

export default {
	add,
} as const