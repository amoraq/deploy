'user strict'

var mongoose = require("mongoose");
var User = mongoose.model('User');

function response_additions(err, data) {
    if (err) {
        this.json({
            error: err
        });
    }
    this.json({
        data
    });
};

function UserController(){
    this.index = function(req, res){
        User.find({}, function(err, data){
            res.json(data);
        });
    };

    this.create = function(req, res){
        res.json({

        });
    };

    this.update = function(req, res){
        res.json({
            future: 'update'
        });
    };

    this.delete = function(req, res){
        if (!req.params.id){
            console.log('unable to delete');
        }

        User.remove({_id: req.params.id}, function(error){
            if (error){
                console.log("There was an error", error);
            }
            else {
                User.find({}, function(err, user){
                    res.json(user);
                });
            };
        });
    };

    this.show = function(req, res){
        res.json({
            future: 'show'
        });
    };

    this.login = function(req, res) {
        User.findOne({
            email: req.body.email
        }, function(err, data) {
            if (err) {
                res.json({
                        errors: {
                            login_reg: {
                                message: "user name and/or password is invalid",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the initial error"
                            }
                        },
                        name: "Validation error"
                    }

                );
            } else if (data && data.validPassword(req.body.password)) {
                res.json({
                    _id: data._id
                });
            } else {
                res.json({
                        errors: {
                            login_reg: {
                                message: "user name and/or password is invalid",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the initial error"
                            }
                        },
                        name: "Validation error"
                    }

                );
            }
        })
    };

    this.register = function(req, res){
        var user = new User(req.body);
        user.save(function(err, newUser){
            if (err) {
                res.json(err);
            }
            else {
                res.json({})
            }
        });
    };
};

module.exports = new UserController();
