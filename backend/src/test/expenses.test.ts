import supertest from "supertest"
import server from "../server"

const request = supertest(server)

// Retrieve all expenses
test("GET /expenses/v1/all", async () => {
	const response = await request.get("/api/v1/expenses/all")

	expect(response.status).toBe(200)
	expect(response.body).toStrictEqual([])
})

// Add new expense
test("POST /expenses/v1/add", async () => {
	const response = await request.post("/api/v1/expenses/add").send({
		"amount": 100,
		"description": "Lunch",
	})

	expect(response.status).toBe(201)
	expect(response.body).toStrictEqual({
		"amount": 100,
		"description": "Lunch",
	})
})

// Validate amount 
test ("POST /expenses/v1/add", async () => {
	const response = await request.post("/api/v1/expenses/add").send({
		"amount": "",
		"description": "Example",
	})

	expect(response.status).toBe(400)
})

// Validate description 
test ("POST /expenses/v1/add", async () => {
	const response = await request.post("/api/v1/expenses/add").send({
		"amount": 0,
		"description": 12,
	})

	expect(response.status).toBe(400)
})