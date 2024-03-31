import ReportService from "../services/ReportService"
import { IRes } from "./types/express/misc"
import { IReq } from "./types/types"

async function get_(_: IReq, res: IRes) {
	try {
		const expenses = await ReportService.get_()
		return res.status(200).send(expenses)
	} catch (error: unknown) {
		return res.status(500).send({ error: "Internal server error" })
	}
}

export default {
	get_
} as const