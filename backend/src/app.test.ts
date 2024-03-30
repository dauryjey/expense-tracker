import supertest from "supertest"
import { app } from "./app"

const request = supertest(app)

// Add new expense
test("POST /expenses/v1/add", async () => {
	const response = await request.post("/expenses/v1/add").send({
		"amount": 100,
		"description": "Lunch",
	})

	expect(response.status).toBe(201)
	expect(response.body).toStrictEqual({
		"amount": 100,
		"description": "Lunch",
	})
})