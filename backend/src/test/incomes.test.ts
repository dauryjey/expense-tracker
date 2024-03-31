import supertest from "supertest"
import server from "../server"

const request = supertest(server)

// Add new income 
test("POST /income/v1/add", async () => {
	const response = await request.post("/api/v1/income/add").send({
		"amount": 1000,
		"description": "Salary",
	})

	expect(response.status).toBe(201)
	expect(response.body).toStrictEqual({
		"amount": 1000,
		"description": "Salary",
	})
})

// Validate amount
test ("POST /income/v1/add", async () => {
	const response = await request.post("/api/v1/income/add").send({
		"amount": "",
		"description": "Salary",
	})

	expect(response.status).toBe(400)
})

// Delete income
test("DELETE /income/v1/delete/:id", async () => {
	const createResponse = await request.post("/api/v1/income/add").send({
		"id": "1",
		"amount": 1000,
		"description": "Salary",
	})

	const createdIncomeId = createResponse.body.id

	const deleteResponse = await request.delete(`/api/v1/income/delete/${createdIncomeId}`)

	expect(deleteResponse.status).toBe(204)
})

// Delete income that does not exist
test	("DELETE /income/v1/delete/:id", async () => {
	const response = await	request.delete("/api/v1/income/delete/22")

	expect(response.status).toBe(404)
})