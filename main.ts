import express from "npm:express";
import './config/db.ts'
import todo from "./router/todo.ts"

const app = express()
const port = 3000

app.use(express.json())

app.use("/todos", todo)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})