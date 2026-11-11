import express from 'express'
import todoRouter from './routes/route.js'
import cors from 'cors'

const app = express();

app.use(cors({
    origin:["http://localhost:5173","http://localhost:3001"],
    credentials:true
}))
app.use(express.json())
app.use(todoRouter)





export default app;