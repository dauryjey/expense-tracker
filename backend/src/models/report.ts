import { IBalance } from "./balance"
import { IExpense } from "./expense"

export interface IReport {
	expenses: IExpense[],
	incomes: IExpense[],
	balance: IBalance | number
}
