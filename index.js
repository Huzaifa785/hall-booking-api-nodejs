import express from 'express'
import cors from 'cors'
import roomRoutes from './routes/rooms.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors({
    origin: "*"
}))

app.use(express.json())

app.use('/rooms', roomRoutes)

app.get("/", (req, res) => res.send("<h1>Welcome to hall booking API...</h1>"))

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})