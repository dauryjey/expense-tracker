export default {
	Base: "/api/v1",
	Expenses: {
		Base: "/expenses",
		Add: "/add",
		RetrieveAll: "/all",
		Delete: "/delete/:id",
	},
	Incomes: {
		Base: "/income",
		Add: "/add",
		RetrieveAll: "/all",
		Delete: "/delete/:id",
	},
	Balance: {
		Base: "/balance",
		getBalance: "/getBalance",
	},
	Report: {
		Base: "/report",
		getReport: "/getReport",
	},
} as const
