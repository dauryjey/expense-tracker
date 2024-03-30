export interface IExpense {
	description: string;
 amount: number;
}

function new_(description: string, amount: number): IExpense {
	return {
		description,
		amount
	}
}

function isValid(expense: IExpense): boolean {
	return (
		typeof expense.description === "string" &&
    typeof expense.amount === "number" &&
    expense.amount > 0
	)
}

export default {
	new: new_,
	isValid,
}
