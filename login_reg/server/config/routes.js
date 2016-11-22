// var loginController = require('../controllers/startingController.js');

console.log("routes");
// var path = require("path");
var mongoose = require("mongoose");
var Users = require("./../controllers/users.js");

module.exports = function(app){
    app.get('/users', Users.index);
    app.get('/users/:id', Users.show);
    app.post('/users', Users.create);
    app.put('/users/:id', Users.update);
    app.delete('/users/:id', Users.delete);

    app.post('/login', Users.login);
    app.post('/register', Users.register);
    //The following routes cause the app to crash and I don't know why
    // app.post('/newAppoint', appointmentsController.newAppoint);
    // app.delete('/deleteAppoint', appointmentsController.removeAppoint);
    // app.get('/showAppoint', appointmentsController.index);
};
