const bcrypt =require('bcrypt');

function hash(plaintext){
    return bcrypt.hash(plaintext, 10)
     
}
module.exports = {
    ...bcrypt,
    hash
}