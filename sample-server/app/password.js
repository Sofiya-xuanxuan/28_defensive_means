const crypto = require('crypto')
const hash = (type, str) => crypto.createHash(type).update(str).digest('hex')
const md5 = str => hash('md5', str)
const sha1 = str => hash('sha1', str)
const encryptPassword = (salt, password) => md5(salt + 'abced@#4@%#$7' + password)

console.log('md5',md5('111111'));
console.log('sha1',sha1('111111'));

module.exports = encryptPassword