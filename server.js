const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path")

require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'))

const db = require("./models")
const routes = require("./routes");

//Production environment
// Serve up static assets
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
 }
 app.use(routes);

 // Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Start the API server 
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);

});


