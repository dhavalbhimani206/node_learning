const express = require("express")
const path = require("path")
const hoganMiddleware = require("hogan-middleware")

const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};


var https = require('https');


const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine("mustache", hoganMiddleware.__express)

// set the public directory for images, css and js
app.use(express.static(path.join(__dirname, "public")))

const indexRouter = require("./routes/index")
app.use('/', indexRouter)
// app.listen(3000)

var httpsServer = https.createServer(options, app);
httpsServer.listen(443, "0.0.0.0");

console.log('Server is runnning')