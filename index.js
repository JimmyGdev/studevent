const express = require('express')
const app = express()

const eventList = [
    {
        id: 1,
        name: "Event 1",
        date: "2020-01-01",
    },
    {
        id: 2,
        name: "Event 2",
        date: "2020-01-02",
    }
]

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8000, () =>{
    console.log('Running app express on port : 8000')
})

//Get all events
app.get("/events", (req, res) =>{
    res.send (eventList)
})


//Get one event

app.get("/events/:id", (req, res) =>{
    const event = eventList.find(event => event.id === parseInt(req.params.id))
    if(!event){
        res.status(404).send({message :"Event not found" })
    }
    res.send (event)
})


app.get("/contact", (req, res) =>{
    res.send("Hello contact test nodemon")
})

//Create event

app.post("/events", (req, res) =>{
    res.send("Create fevent")
})