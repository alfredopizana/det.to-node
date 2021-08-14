const mongoose = require('mongoose');
const DB_USER = 'dev-to-user'
const DB_PASSWORD = 'huUD5TVmEdjCZZtE'
const DB_HOST = 'dev-to-node-cluster.hgkv1.mongodb.net'
const DB_NAME = 'dev-to-node-cluster'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
//mongodb+srv://dev-to-user:<password>@dev-to-node-cluster.hgkv1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
function connect(){
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
}

module.exports = connect