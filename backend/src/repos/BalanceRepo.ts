import orm from "./MockOrm"

async function getBalance (): Promise<number> {
	const db = await orm.openDb()
	const expenses = db.expenses
	const incomes = db.incomes
	
	const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0)

	const totalIncomes = incomes.reduce((acc, curr) => acc + curr.amount, 0)

	const balance = totalIncomes - totalExpenses

	return balance
}

export default {
	getBalance
} as const
