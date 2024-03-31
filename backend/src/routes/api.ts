import { Router } from "express"
import Paths from "../const/Paths"
import ExpensesRoutes from "./ExpensesRoutes"
import ExpensesService from "../services/ExpensesService"
import IncomeService from "../services/IncomesService"
import IncomesRoutes from "./IncomesRoutes"
import BalanceRoutes from "./BalanceRoutes"
import ReportRoutes from "./ReportRoutes"

// Create the api router
const apiRouter = Router()

// Create the routers
const expenseRouter = Router()
const incomeRouter = Router()
const balanceRouter = Router()
const reportRouter = Router()

// Define the routes for expenses
expenseRouter.get(Paths.Expenses.RetrieveAll, ExpensesRoutes.retrieveAll)
expenseRouter.get(Paths.Expenses.GetTotal, ExpensesRoutes.retrieveTotal)

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
incomeRouter.get(Paths.Incomes.GetTotal, IncomesRoutes.retrieveTotal)


incomeRouter.post(
	Paths.Incomes.Add,
	IncomeService.validators,
	IncomesRoutes.add
)

incomeRouter.delete(
	Paths.Incomes.Delete,
	IncomesRoutes.deleteOne
)

// Define the routes for balance
balanceRouter.get(Paths.Balance.getBalance, BalanceRoutes.getBalance)

// Define the routes for report
reportRouter.get(Paths.Report.getReport, ReportRoutes.get_)

//	Use the routers
apiRouter.use(Paths.Expenses.Base, expenseRouter)
apiRouter.use(Paths.Incomes.Base, incomeRouter)
apiRouter.use(Paths.Balance.Base, balanceRouter)
apiRouter.use(Paths.Report.Base, reportRouter)


export default apiRouter
