import { validationResult } from "express-validator"
import { IExpense } from "../models/expense"
import ExpensesService from "../services/ExpensesService"
import { IRes } from "./types/express/misc"
import { IReq } from "./types/types"

async function retrieveAll(req: IReq, res: IRes) {
	try {
		const expenses = await ExpensesService.retrieveAll()
		return res.status(200).send(expenses)
	} catch (error: unknown) {
		return res.status(500).send({ error: "Internal server error" })
	}
}

async function add(req: IReq<IExpense>, res: IRes) {
	const { amount, description } = req.body

	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).send({ errors: errors.array() })
	}

	await ExpensesService.addOne({ amount, description })
	return res.status(201).send({ amount, description }).end()
}

async function deleteOne(req: IReq<string>, res: IRes) {
	try {
		const { id } = req.params
		await ExpensesService.deleteOne(id)
		
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