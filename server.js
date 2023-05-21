import  express from "express";

import mongoose from "mongoose";

import Messages from './dbMessages.js';

import Pusher from "pusher";//const Pusher = require("pusher");

// app cofig 
const app = express();
const port = process.env.PORT || 9000;



const pusher = new Pusher({
  appId: "1604633",
  key: "ee9601d3444281b53cf9",
  secret: "e5dbe6c16a13b5ce1ef1",
  cluster: "mt1",
  useTLS: true
});



// middleware
app.use(express.json());



// DB config
const connection_url = "mongodb+srv://raavisourav:A018Oqm9XdJ5kvWO@cluster0.ewd69qa.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(connection_url, {
    useUnifiedTopology:true
});


const db = mongoose.connection

db.once('open', ()=> {
    console.log("db connected");

    const msgCollection = db.collection('messagecontents');// this funct takes collects make sure it matches with mongodb colection 
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change)=>{
        console.log(change);
    });
});

//api routes
app.get("/", (req, res)=> res.status(200).send("hello world"));

app.get("/messages/sync", (req, res)=> {

    Messages.find().then((result) =>{
        res.send(result);
    }).catch((err) => {
        res.send(err);
    });

});

//post request to send new mssg to db
app.post('/messages/new', (req, res) =>{
    const dbMessage = req.body;

    Messages.create(dbMessage).then((result) =>{
        res.send(result);
    }).catch((err) => {
        res.send(err);
    });

});

app.listen(port, () => console.log('listening at port :' +port));