const mongoose = require('mongoose')
const User = require('../models/User.js')

exports.addUser = async function (req, res) {
    var params = {
        name: 'Luan Kim',
        password: '123456'
    }

    var usersModel = new User(params);
    let result = await usersModel.save();
    res.json(result)
};

exports.index = (req, res) => {
    res.send("Hello User");
};
