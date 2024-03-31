import { IBalance } from "../models/balance"
import BalanceRepo from "../repos/BalanceRepo"

function getBalance (): Promise<number | IBalance> {
	return BalanceRepo.getBalance()
}

export default {
	getBalance
} as const