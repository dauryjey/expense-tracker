import { Router } from "express"
import Paths from "../const/Paths"
import ExpensesRoutes from "./ExpensesRoutes"

const apiRouter = Router()

const expenseRouter = Router()

expenseRouter.post(
	Paths.Expenses.Add,
	ExpensesRoutes.add
)

apiRouter.use(Paths.Expenses.Base, expenseRouter)

export default apiRouter
