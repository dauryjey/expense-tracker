export default {
	Base: "/api/v1",
	Expenses: {
		Base: "/expenses",
		Add: "/add",
		RetrieveAll: "/all",
		Delete: "/delete/:id",
		GetTotal: "/getTotal",
	},
	Incomes: {
		Base: "/income",
		Add: "/add",
		RetrieveAll: "/all",
		Delete: "/delete/:id",
		GetTotal: "/getTotal",
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
