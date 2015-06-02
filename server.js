var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.port || 8080;

var router = express.Router();
var serve = express.Router();

app.use(express.static(__dirname + '/public/app'));
app.use(express.static(__dirname + '/images'));

// Cors headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    next();
});

//API prefix

app.use('/api', router);

//Routes
app.use('/', express.static(__dirname + '/public'));
app.use('/images/', express.static(__dirname + '/images'));

router.get('/', function(req, res)  {
  res.json({title : 'Welcome'});
});

router.get('/contact', function(req, res)  {

  db.serialize(function() {
    db.each("SELECT rowid as id, * FROM Contact", function(err, row) {
      res.json(row);
    });
  });

  //res.json();

  /*
  res.json({
    title: 'Contact Details',
    fullname: 'Stuart Douglas',
    image: 'images/profile.png',
    desc: 'University Student',
    social:[
      {
        site: 'Linkedin',
        link: 'https://uk.linkedin.com/in/stuartjdouglas'
      },
      {
        site: 'Github',
        link: 'https://github.com/remony'
      }
    ],
    email:[
      {
        type: 'University',
        email: 's.u.douglas@dundee.ac.uk'
      },
      {
        type: 'Personal',
        email: 'stewie.douglas@btinternet.com'
      }
    ]
  });
*/

});

router.get('/featuredProjects', function(req, res)  {

  db.serialize(function() {
    //SELECT * FROM table ORDER BY RANDOM() LIMIT X
    db.all("SELECT rowid as id, * FROM Projects ORDER BY RANDOM() LIMIT 2", function(err, row) {
      res.json({
        Title: 'Random Projects',
        projects:
          row
      });
    });
  });
  /*
  res.json({
    title: 'Projects',
    projects: [
      {
        title: "Singleston Tutorial",
        desc: "As part of the Games programming course we were asked to create a website to teach people about a chosen design pattern.",
        technology: [
          {
            title:"AngularJS"
          }
        ],
        github: "https://github.com/remony/SingletonTutorial",
        image: "images/Singleton.png"
      },
      {
        title: "Shiro Ruins",
        desc:"Ruins have turned colourless and filled with creatures harming anyone who goes near them, you set out to take out the dangerous creatures and bring colour back to the ruins. You play as Shiro a normal 17 year old girl who isn’t exactly outgoing but having been brought up being trained to protect yourself, she is able to avoid most dangers without breaking a sweat.",
        technology: [
          {
            title:"Unity"
          }
        ],
        github: "https://github.com/remony/Shiro-Ruins",
        image: "images/ShiroRuins.png"
      }
    ]
    })
    */
});

router.get('/projects', function(req, res)  {

  db.serialize(function() {
    db.all("SELECT rowid as id, * FROM Projects", function(err, row) {
      //projects.push(row);
      res.json({
        Title: 'Projects',
        projects:
          row

      });
    })
  });


  /*
  res.json({
    title: 'Projects',
    projects: [
      {
        title: "Singleston Tutorial",
        desc: "As part of the Games programming course we were asked to create a website to teach people about a chosen design pattern.",
        technology: [
          {
            title:"AngularJS"
          }
        ],
        github: "https://github.com/remony/SingletonTutorial",
        image: "images/Singleton.png"
      },
      {
        title: "Shiro Ruins",
        desc:"Ruins have turned colourless and filled with creatures harming anyone who goes near them, you set out to take out the dangerous creatures and bring colour back to the ruins. You play as Shiro a normal 17 year old girl who isn’t exactly outgoing but having been brought up being trained to protect yourself, she is able to avoid most dangers without breaking a sweat.",
        technology: [
          {
            title:"Unity"
          }
        ],
        github: "https://github.com/remony/Shiro-Ruins",
        image: "images/ShiroRuins.png"
      },
      {
        title: "AgileApi",
        desc: "AgileApi is a collaborative endpoint tester built with AngularJS / NodeJS and Cassandra.",
        technology: [
          {
            title:"AngularJS"
          },
          {
            title:"NodeJS"
          },
          {
            title:"Cassandra"
          }
        ],
        github: "https://github.com/jslvtr/AgileAPI",
        image: "images/2.jpg"
      }
    ]
    })
    */
});

router.get('/project/:id', function(req, res) {
  console.log(req.param("id") );
  db.serialize(function() {
    db.all("SELECT rowid as id, * FROM Projects where id = '" + req.param("id") + "'", function(err, row) {
      //projects.push(row);
      res.json({
        Title: 'Project',
        projects:
          row

      });
    })
  });
});

router.post('/contact', function(req, res)  {
  var contact = req.body.contact;
  db.serialize(function() {
    db.each("UPDATE Contact SET name='"+ contact.name +"',image='"+ contact.image +"',desc='"+ contact.desc +"',email='"+ contact.email +"',email2='"+ contact.email2 +"',Linkedin='"+ contact.Linkedin +"',Github='"+ contact.Github +"' where id = '1'", function(err, row) {
      if(err)
      {
        console.log("BOOOOOO  " + err.message);
        res.json(404, {"message": err.message });
      }
      else {
        console.log("yay login");
        res.json(200,{} );
      }
    });
  });
});

router.post('/project', function(req, res)  {
  var projects = req.body.project;
  console.log(projects);
  db.serialize(function() {
    db.each("INSERT INTO Projects (Title, Description, Technology, Url, Github, Type, Image) VALUES('"+ projects.Title + "','" + projects.Description + "','" + projects.Technology + "','" + projects.Url + "','" + projects.Github + "','" + projects.Type + "','" + projects.Image + "')", function(err, row) {
      if(err)
      {
        console.log("BOOOOOO  " + err.message);
        res.json(404, {"message": err.message });
      }
      else {
        console.log("yay login");
        res.json(200,{} );
      }
    });
  });
});

router.post('/login', function(req, res)  {
  //console.log(req.body);
  db.serialize(function() {
    db.each("SELECT rowid as id, * FROM login", function(err, row) {
      console.log(row.username + row.password);

      if (req.body.username == row.username)
      {
        console.log("username is the same");
        if (req.body.pass == row.password)
        {
          console.log("yay login");
          res.json(200, {});
        }
        else
        {
          res.json(404, []);
        }
        //console.log("success");

      } else {
          res.json(404, []);
      }
    });
  });
});

//Server
app.listen(port);
console.log("Server start on port: " + port);
