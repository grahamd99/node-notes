console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var addup = notes.add(8,-3);
console.log(addup);

/*
var res = notes.addNote();
console.log(res);

var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username} you are ${notes.age}`, function (err){
  if (err) {
    console.log('Unable to write to file');
  }
});
*/
