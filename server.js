const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')
const connectDB = require('./config/db')
connectDB()

// Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use('/api', userRoutes)
app.use('/api', taskRoutes)


const PORT = 3000
app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`);  
})