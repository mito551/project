const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.port || 8080
const db = require('./models')

const corsOptions = {
    origin: "http://localhost:8081"
}

// app.use(cors(corsOptions))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

db.sequelize.sync()
    .then(() => {
        console.log("Database Synced")
    })

 app.get('/', (req, res) => {
     res.json({message: 'Hello world'})
 })

app.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    )
    next()
})

require('./routes/auth.route')(app)
require('./routes/user.route')(app)
require('./routes/scores.route')(app)

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})