var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var cityData = require('./cityData.json');
//Temporary code for testing. Should be replaced with MongoDB calls in production
var scoreData;

var app = express();

//I set it to 9000, hopefully this will work on your devices. If not, easy to change.
var port = process.env.PORT || 9000;

app.engine('handlebars', exphbs({ defaultLayout: 'mainPage'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://QxnWrw6QzWvQvTm8:W7Q3DBwwnJsFAYC@cluster0-aqhqf.mongodb.net/CS290?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("CS290").collection("CityGuess");
  var highScores = collection.find();
  highScores.toArray(function (err, scores) {
    if (err) {
      res.status(500).send("Error fetching people from DB.");
    } else {
      scores.sort(function(a, b){return b.score - a.score});
      console.log("Read from database successful");
      console.log(scores);
      scoreData = scores;
    }
  });
  // perform actions on the collection object
  client.close();
});

//front page for site. What the user first sees and navigates through to start the game. 
app.get('/', function(req, res){
    res.status(200).render('frontPage');
});

var counter = 0;

//When a user clicks to start the game, the domain redirects here (the redirection can be found in index.js).
//The cityData.json file contains information and images.
//A random number is chosen in this function and the corresponding element in the cityData.json array is passed...
//...to the start.handlebars page. 
app.get('/start', function(req, res){
    
    counter++;

    if(counter >= 6){
        res.status(200).render('finalScore');
    }

    //Creates a random number between 
    var rand = Math.floor(Math.random() * 50);
    res.status(200).render('start', cityData[rand]);
});

app.get('/highscores', function(req, res){
    res.status(200).render('highScore', { allScores: scoreData });
});

app.post('/highscores/new', function(req, res, next){
    console.log("Data received");
    if (req.body.name && req.body.score) {
        var newScore = {
            name: req.body.name,
            score: req.body.score
        };

        const MongoClient = require('mongodb').MongoClient;
        const uri = "mongodb+srv://QxnWrw6QzWvQvTm8:W7Q3DBwwnJsFAYC@cluster0-aqhqf.mongodb.net/CS290?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {
        const collection = client.db("CS290").collection("CityGuess");
        collection.insertOne(newScore, function (err, scores) {
        if (err) {
            res.status(500).send("Error accessing DB.");
        } else {
           console.log("Write to database successful");
           var highScores = collection.find({});
           highScores.toArray(function (err, scores) {
           if (err) {
               res.status(500).send("Error fetching people from DB.");
           } else {
              console.log("Read from database successful");
              console.log(scores);
              scoreData = scores;
           }
        });
      }
    });
    // perform actions on the collection object
    client.close();
});
    } else {
        console.log(req);
        res.status(400).send("Invalid request received");
    }
});

//serves public files
app.use(express.static('public'));

//displays 404 page. 
app.get('*', function (req, res) {
    res.status(404).render('404');
});

app.listen(port, function(){
    console.log("== Server is listening on port", port);
});
