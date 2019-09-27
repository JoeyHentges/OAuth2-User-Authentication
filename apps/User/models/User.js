/**
 * Author
 * Joseph Hentges
 * September 2019
 * https://joeyhentges.com
 * 
 * This is the model of the mongoose database entry.
 */

 // libraries, and getting the database connections
const { Schema } = require('mongoose');
const { dbs } = require('../../configs');

const schema = new Schema({
  /*
   OAuth 2.0 Varaibles
    - the name of the authentication location - Google, Facebook, etc...
    - the access token for the account - hashed
  */
  authenticator: String,
  accessToken: String,
  // my variables they set on first sign in
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  phone: String,
  // some account checking variables
  locked: Boolean,
  disabled: Boolean,
  accountVerified: Boolean,
  // dates
  dateCreated: Date,
  dateModified: Date,
  dateLastLoggedIn: Date,
  // objects
  securityQuestions: {
    questionOne: {
      question: String,
      answer: String,
    },
    questionTwo: {
      question: String,
      answer: String,
    },
    questionThree: {
      question: String,
      answer: String,
    },
  },
  logs: [{
    time: String,
    message: String,
  }],
});

module.exports.User = dbs.db1().model('User', schema);
