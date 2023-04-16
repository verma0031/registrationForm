const User = require('../models/user');

const path = require('path');
const rootDir = require('../util/path');

exports.getData = (req, res, next) => {
    res.sendFile(path.join(rootDir , './views/admin' , 'user.html'));
};



exports.getUsers = (req, res, next) => {
    
}