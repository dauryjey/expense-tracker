import supertest from "supertest"
import server from "../server"

const request = supertest(server)

// Retrieve all expenses
test("GET /expenses/v1/all", async () => {
	const response = await request.get("/api/v1/expenses/all")

	expect(response.status).toBe(200)
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
		"description": "Romo",
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

// Delete Expense
test("DELETE /expenses/v1/delete/:id", async () => {
	const createResponse = await request.post("/api/v1/expenses/add").send({
		"id": "1",
		"amount": 600,
		"description": "Videogames",
	})

	const	createdExpenseId = createResponse.body.id

	const deleteResponse = await request.delete(`/api/v1/expenses/delete/${createdExpenseId}`)

	expect(deleteResponse.status).toBe(204)
}) 

// Delete expense that does not exist
test ("DELETE /expenses/v1/delete/:id", async () => {
	const response = await	request.delete("/api/v1/expenses/delete/22")

	expect(response.status).toBe(404)
})
