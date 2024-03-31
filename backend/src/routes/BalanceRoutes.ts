import BalanceService from "../services/BalanceService"
import { IRes } from "./types/express/misc"
import { IReq } from "./types/types"

async function getBalance(_: IReq, res: IRes) {
	try {
		const balance = await BalanceService.getBalance()
		return res.status(200).send({ balance })
	} catch (error: unknown) {
		return res.status(500).send({ error: "Internal server error" })
	}
}

export default {
	getBalance
} as const
