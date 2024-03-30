import express, { Request, Response } from "express"

export const app = express()

app.use(express.json())

const expenses = []

app.post("/expenses/v1/add", (req: Request, res: Response) => {
	try {
		expenses.push(req.body)
		res.status(201).send(req.body)
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).send({ error: e.message })
	}
})

app.listen(3000, () => {
	console.log("Server is running on port 3000")
})
