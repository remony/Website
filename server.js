var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.port || 8080;

var router = express.Router();
var serve = express.Router();

app.use(express.static(__dirname + '/public/app'));


//API prefix

app.use('/api', router);

//Routes
app.use('/', express.static(__dirname + '/public'));


router.get('/', function(req, res)  {
  res.json({title : 'Welcome'});
});

//Server
app.listen(port);
console.log("Server start on port: " + port);
