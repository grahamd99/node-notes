console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Gary', 1, 'Gary', 1, 2, 3, 4]);
console.log(filteredArray);
//console.log(_.isString(true));
//console.log(_.isString('Gary'));

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
