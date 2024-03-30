import express from "express"
import "dotenv/config"
import Paths from "./const/Paths"
import apiRouter from "./routes/api"


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(Paths.Base, apiRouter)

export default app