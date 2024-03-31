import { IReport } from "../models/report"
import BalanceRepo from "./BalanceRepo"
import ExpensesRepo from "./ExpensesRepo"
import IncomesRepo from "./IncomesRepo"

async function get_ (): Promise<IReport>  {
	return {
		balance: await BalanceRepo.getBalance(),
		expenses: await ExpensesRepo.getAll(),
		incomes: await IncomesRepo.getAll()
	}
}

export default {
	get_
} as const
