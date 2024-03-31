import { IReport } from "../models/report"
import BalanceRepo from "./BalanceRepo"
import ExpensesRepo from "./ExpensesRepo"
import IncomesRepo from "./IncomesRepo"

async function get_ (): Promise<IReport>  {
	return {
		balance: await BalanceRepo.getBalance(),
		expenses: {
			total: await ExpensesRepo.getTotal(),
			expenses: await ExpensesRepo.getAll()
		},
		incomes: {
			total: await IncomesRepo.getTotal(),
			incomes: await IncomesRepo.getAll()
		}
	}
}

export default {
	get_
} as const
