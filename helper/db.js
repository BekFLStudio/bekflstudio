
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://newnew:123qwe123@cluster0.lf5gw.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    const db = mongoose.connection;
    db.on("open", () => {
        console.log('mongodbga onlayn ulandik');
    })
    db.on("error" , (err) => {
        console.log('mongodbga ulanishda hatolik bor');
    })
}