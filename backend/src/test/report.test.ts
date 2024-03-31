import supertest from "supertest"
import server from "../server"

const request = supertest(server)

// Retrieve REPORT
test("GET	/report/v1", async () => {
	const response = await request.get("/api/v1/report/getReport")

	expect(response.status).toBe(200)
	expect(response.body).toHaveProperty("balance")
	expect(response.body).toHaveProperty("expenses")
	expect(response.body).toHaveProperty("incomes")
})