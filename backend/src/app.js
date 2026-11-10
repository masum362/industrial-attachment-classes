import express from 'express'
import todoRouter from './routes/route.js'


const app = express();

app.use(express.json())


app.use(todoRouter)





export default app;