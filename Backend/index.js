const express=require('express')
const cors=require('cors')
const dbconnect = require('./Config/database')
const router = require('./Routes/Postuser')
const app=express()
app.use(express.json())
require('dotenv').config()
const PORT=process.env.PORT||8000
app.listen(PORT,()=>{
    console.log(`App Connected at Port No ${PORT}`)
})
app.use(cors({origin:"http://localhost:5173", credential:true}))
app.get('/',(req,res)=>{
    res.send(`<h1>This Is My Home Page</h1>`)
    
})
dbconnect()
app.use("/api/v1",router)