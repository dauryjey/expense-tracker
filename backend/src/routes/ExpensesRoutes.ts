import { validationResult } from "express-validator"
import { IExpense } from "../models/expense"
import ExpensesService from "../services/ExpensesService"
import { IRes } from "./types/express/misc"
import { IReq } from "./types/types"

async function add(req: IReq<IExpense>, res: IRes) {
	const { amount, description } = req.body

	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).send({ errors: errors.array() })
	}

	await ExpensesService.addOne({ amount, description })
	return res.status(201).send({ amount, description }).end()
}

export default {
	add,
} as const