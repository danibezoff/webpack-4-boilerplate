import './style.sass'
let message = 'Hello, boilerplate!'

if (process.env.NODE_ENV === 'test') {
  module.exports.message = message
}
