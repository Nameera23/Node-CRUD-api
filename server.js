const express = require('express')
const cors = require('cors')

const app = express()

var CorOption = {
    origin: 'https://localhost:8080'
}



// middle ware
app.use(cors(CorOption))

app.use(express.json())

app.use(express.urlencoded({extended: true}))



// routers 

const ProductRouter = require('./routes/UserRouter.js')
app.use('/api', ProductRouter)

const ReviewRouter =require('./routes/ReviewRouter.js')
app.use('/api1',ReviewRouter)


app.get('/', (req,res) =>{
    res.json({message: 'Hello server online'})
})



// port 

const PORT = process.env.PORT || 8080



// server

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})