const express = require("express")
const path = require("path")
const hoganMiddleware = require("hogan-middleware")

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine("mustache", hoganMiddleware.__express)

// set the public directory for images, css and js
app.use(express.static(path.join(__dirname, "public")))

const indexRouter = require("./routes/index")
app.use('/', indexRouter)

app.listen(3000)

console.log('Server is runnning')