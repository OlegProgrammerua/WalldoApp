
const express = require('express')
const cors = require('cors')
const coordinatesRouter = require('./routes/coordinateRoutes')
const LeaderRouter = require('./routes/leaderRoutes')
require('dotenv').config();
const mongoose = require('mongoose')
const app  = express()




app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"https://walldo-c9oncadx4-olegprogrammerua.vercel.app",
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true,
    optionsSuccessStatus:200
}));



mongoose.connect('mongodb+srv://oleh:test123@cluster0.hdlmtbj.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("The database is connected"))
.catch(()=>console.log("Something went wrong during connection to database"))

app.use(coordinatesRouter)
app.use(LeaderRouter)

app.get("/",(req,res)=>{
    res.json({message:"Hello world"})
})


app.listen(process.env.PORT, ()=>{
    console.log("The serever is running")
})