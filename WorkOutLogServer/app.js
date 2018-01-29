 var express = require('express');
	var app = express();
// code below sets up the required status for headers in communication. 
    app.use(require('./middleware/headers'));

    app.use('/api/test', function(req, res){
        res.send("hello World");
    });

    app.listen(3000, function(){
        console.log("app is open on 3000!");
    });

    var bodyParser = require('body-parser');

    
 

    

    var Sequelize = require('sequelize');
 var sequelize = new Sequelize('WorkOutLog', 'postgres', 'Ij7Ae7Ns0S@10414forever',{
     host:'localhost',
    dialect: 'postgres'

})

sequelize.authenticate().then(
    function() {
        console.log('connected to workoutlog postgres db');
    },
    function(err){
        console.log(err);

    }
);

//build a user model in sqllize

    var User = sequelize.define('user',{
        username:Sequelize.STRING,
        passwordhash:Sequelize.STRING,

    });
    User.sync();

    app.use(bodyParser.json());

app.post('/api/user', function(req, res){
    var username = req.body.user.username;
    var pass = req.body.user.password;
    //Need to create a user object and use sequelize to put that user into 
    //our database.
    User.create({
            username: username,  //this code takes the incomming post request data and creates a User object. That object is then persisted to the postgres database through the .create method. 
            passwordhash: ''   // TODO: hash this password- HASH=not human readable. 
    
    }).then( // sequelize is going to return the object it created from db.

        function createSuccess(user){
            res.json({
                user: user, 
                message: 'create'
    
            });

        },
        function createError(err){

            res.send(500, err.message);

        }
    );
});


    //User.sync({ force: true });