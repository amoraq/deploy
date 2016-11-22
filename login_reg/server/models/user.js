'use strict'

var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        reqired: true
    },
    lastName: {
        type: String,
        reqired: true
    },
    email: {
        type: String,
        uniquie: true,
        reqired: true
    },
    birthday: {
        type: Date,
        reqired: true
    }
}, {timestamps: true});

usersSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

usersSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

usersSchema.pre('save', function(done){
    this.password = this.generateHash(this.password);
    done();
});

mongoose.model('User', usersSchema);
