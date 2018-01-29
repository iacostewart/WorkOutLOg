var express = require('express');
var app = express();
var sequelize = require('./db.js');
var bodyParser = require('body-parser');
var User = sequelize.import('./models/user');

User.sync();
//!!!!!***** we will use this function when we need to drop a table. ******** !!!!!
    //User.sync({ force: true })

app.use(bodyParser.json());
app.use(require('./middleware/headers'));

app.use('/api/test', function(req, res){
    res.send("hello World");
});


app.listen(3000, function(){
    console.log("app is open on 3000!");
});

// code below sets up the required status for headers in communication. 

    

    

    
 

    


//build a user model in sqllize

   


app.post('/api/user', function(req, res){
    var username = req.body.user.username;
    var pass = req.body.user.password;
    //Need to create a user object and use sequelize to put that user into 
    //our database.
    User.create({
            username: username,  //this code takes the incomming post request data and creates a User object. That object is then persisted to the postgres database through the .create method. 
            passwordhash: ""   // TODO: hash this password- HASH=not human readable. 
    
    }).then( // sequelize is going to return the object it created from db.

        function createSuccess(user){
            res.json({
                user: user, 
                message: 'create let there be light'
    
            });

        },
        function createError(err){

            res.send(500, err.message);

        }
    );
});

