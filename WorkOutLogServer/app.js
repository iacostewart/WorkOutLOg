require('dotenv').config();
var express = require('express');
var app = express();
var sequelize = require('./db.js');
var bodyParser = require('body-parser');
var User = sequelize.import(__dirname + '\\models\\user.js'); // what does \\ vs // mean.. 
User.sync();
//!!!!!***** we will use this function when we need to drop a table. ******** !!!!!
    //User.sync({ force: true })

app.use(bodyParser.json());
app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-sessions'));
app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/session'));
app.use('/api/test', function(req, res){
    res.send("hello World");
});


app.listen(3000, function(){
    console.log("app is open on 3000!");
});

// code below sets up the required status for headers in communication. 

    

    

    
 

    


//build a user model in sqllize

   


