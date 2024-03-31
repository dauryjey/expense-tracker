export default {
	Base: "/api/v1",
	Expenses: {
		Base: "/expenses",
		Add: "/add",
		RetrieveAll: "/all",
		Delete: "/delete/:id",
	},
} as const
