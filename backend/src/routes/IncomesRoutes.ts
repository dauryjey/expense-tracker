import { validationResult } from "express-validator"
import { IIncome } from "../models/income"
import ExpensesService from "../services/ExpensesService"
import { IRes } from "./types/express/misc"
import { IReq } from "./types/types"
import IncomesService from "../services/IncomesService"

async function retrieveAll(req: IReq, res: IRes) {
	try {
		const incomes = await ExpensesService.retrieveAll()
		return res.status(200).send(incomes)
	} catch (error: unknown) {
		return res.status(500).send({ error: "Internal server error" })
	}
}

async function add(req: IReq<IIncome>, res: IRes) {
	const { id, amount, description } = req.body

	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).send({ errors: errors.array() })
	}

	await IncomesService.addOne({ id, amount, description })
	return res.status(201).send({ id, amount, description }).end()
}

async function deleteOne(req: IReq<string>, res: IRes) {
	try {
		const { id } = req.params
		await IncomesService.deleteOne(id)
		
		return res.status(204).end()
	} catch (error: unknown) {
		return res.status(404).send({ error: "Expense not found" })
	}
}

export default {
	retrieveAll,
	deleteOne,
	add,
} as const