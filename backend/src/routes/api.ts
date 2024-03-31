import { Router } from "express"
import Paths from "../const/Paths"
import ExpensesRoutes from "./ExpensesRoutes"
import ExpensesService from "../services/ExpensesService"
import IncomeService from "../services/IncomeService"
import IncomesRoutes from "./IncomesRoutes"

// Create the api router
const apiRouter = Router()

// Create the routers
const expenseRouter = Router()
const incomeRouter = Router()

// Define the routes for expenses
expenseRouter.get(Paths.Expenses.RetrieveAll, ExpensesRoutes.retrieveAll)

expenseRouter.post(
	Paths.Expenses.Add,
	ExpensesService.validators,
	ExpensesRoutes.add
)

expenseRouter.delete(
	Paths.Expenses.Delete,
	ExpensesRoutes.deleteOne
)

// Define the routes for incomes
incomeRouter.get(Paths.Incomes.RetrieveAll, IncomesRoutes.retrieveAll)

incomeRouter.post(
	Paths.Incomes.Add,
	IncomeService.validators,
	IncomesRoutes.add
)

incomeRouter.delete(
	Paths.Incomes.Delete,
	IncomesRoutes.deleteOne
)

//	Use the routers
apiRouter.use(Paths.Expenses.Base, expenseRouter)
apiRouter.use(Paths.Incomes.Base, incomeRouter)


export default apiRouter
