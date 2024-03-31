import { Router } from "express"
import Paths from "../const/Paths"
import ExpensesRoutes from "./ExpensesRoutes"
import ExpensesService from "../services/ExpensesService"

const apiRouter = Router()

const expenseRouter = Router()

expenseRouter.post(
	Paths.Expenses.Add,
	ExpensesService.validators,
	ExpensesRoutes.add
)

apiRouter.use(Paths.Expenses.Base, expenseRouter)

export default apiRouter