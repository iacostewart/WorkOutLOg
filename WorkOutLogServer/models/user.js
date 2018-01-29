//

// var User = sequelize.define('user', {
//         username: Sequelize.STRING,//user model created using squelize
//         passworedhash: Sequelize.STRING//talks to the table use r
// });

//wraping the varialbe and define methond in a export statement. we will return User and change 'Sewuelize' to 'DataTypes'.

    module.exports = function(sequenlize, DataTypes){
        var User = sequenlize.define('user', {
            username: DataTypes.STRING,
            passwordhash: DataTypes.STRING
        });
        return User;
    };