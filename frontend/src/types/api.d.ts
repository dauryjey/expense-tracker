interface	Expense {
	id: string,
	amount: number,
	description: string
}

interface Income {
	id: string,
	amount: number,
	description: string
}

interface Report {
	balance: number,
	expenses: {
		total: number,
		expenses: Expense[]
	},
	incomes: {
		total: number,
		incomes: Income[]
	}
}