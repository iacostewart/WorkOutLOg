var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
router.post('/', function(req, res){
    var username = req.body.user.username;
    var pass = req.body.user.password;
    //Need to create a user object and use sequelize to put that user into 
    //our database.
    User.create({
            username: username,  //this code takes the incomming post request data and creates a User object. That object is then persisted to the postgres database through the .create method. 
            passwordhash: bcrypt.hashSync(pass,10)  // TODO: hash this password- HASH=not human readable. 
    
    }).then( // sequelize is going to return the object it created from db.

        function createSuccess(user){
            let token = jwt.sign({id:user.id}, "i_am_secret", {expiresln: 60*60*24});
            res.json({
                user: user, 
                message:'created',
                sessionToken:token
                
    
            });

        },
        function createError(err){

            res.send(500, err.message);

        }
    );
});
module.exports = router;
