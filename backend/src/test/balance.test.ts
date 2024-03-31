import supertest from "supertest"
import server from "../server"

const request = supertest(server)

// Retrieve balance

test("GET /balance/v1", async () => {
	const response = await request.get("/api/v1/balance/getBalance")

	expect(response.status).toBe(200)
	expect(response.body).toHaveProperty("balance")
})