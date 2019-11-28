// server.js
// where your node app starts

const rookout = require('rookout');

rookout.start({ token: 'b6e34270652567d863a3efe994a7d081c0a16b53be9e79bc0425149f4d9a77d8' });

// init project
const express = require('express');
const app = express();



// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
