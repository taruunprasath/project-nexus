 const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 5500

const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/feedback')
const db = mongoose.connection
db.once('open',()=>{
    console.log("mongodb connected")
})

const feedbackSchema = new mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String
})

const Feedback = mongoose.model("data",feedbackSchema)


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'contact.html'))
})

app.post('/post',async (req,res)=>{
    const {name, email, subject, message} = req.body
    const feedback = new Feedback({
        name,
        email,
        subject,
        message
    })
    await feedback.save()
    console.log(feedback)
    res.send("Feedback Successfully Submitted")
})
app.listen(port,()=>{
    console.log("Server is Running")
})