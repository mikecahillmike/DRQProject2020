const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser =require("body-parser");
const mongoose = require('mongoose');
const path = require('path'); 

app.use(cors()); // use cors package everytime
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.use(express.static(path.join(__dirname, '../build'))); //where to find build folder
app.use('/static', express.static(path.join(__dirname, 'build//static'))); //where the static folder is
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
                                                 
// parse application/json
app.use(bodyParser.json())

const mongoDB ='mongodb+srv://admin:admin@cluster1.y75fp.mongodb.net/players?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true});

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name:String,
    price:String,
    poster:String
});

var PlayerModel = mongoose.model("players", playerSchema);

app.get('/api/players', (req, res)=>{    // new route point

    PlayerModel.find((err, data)=>{
        res.json(data);
    })

    // res.status(200).json({
    //     message: "Everything is ok",  // passing data down
    //     movies:mymovies});
})   

app.get('/api/players/:id', (req,res)=>{
    console.log(req.params.id);

    MovieModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    })
})

app.put('/api/players/:id',(req, res) =>{
    console.log("Update player: "+req.params.id);
    console.log(req.body);

    MovieModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
})

app.post('/api/players', (req, res)=>{  //end point listing for post
    console.log('Player Recieved!');
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.poster);

    PlayerModel.create({
        name:req.body.name,
        price:req.body.price,
        poster:req.body.poster
    })

    res.send('Item Added');// stop duplicates
}) 

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})