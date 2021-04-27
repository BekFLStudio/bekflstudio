const { query } = require('express');
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.body.token || req.query.token

    if(token) {
        jwt.verify(token, req.app.get('app_secret_key'), (err, decoded) => {
            if(err){
                res.json({
                    status: false,
                    message: 'token xato, kira olmaysiz'
                })
            }else{
                req.decoded = decoded
                next();
            }
        })
    }
    else{
        res.json({
            status: false,
            message: 'token xato'
        })
    }
}