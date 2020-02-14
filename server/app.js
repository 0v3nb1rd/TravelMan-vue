const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')

const commetsRoutes = require('./routes/comment.routes')
const postRoutes = require('./routes/post.routes')
const passportStrategy = require('./middlewere/pasport-strategy')
const authRouts = require('./routes/auth.routes')
const keys = require('./keys')
const app = express()

mongoose
  .connect(keys.MONGO_URL)
  .then(() => console.log('MongoDB Connected!...'))
  .catch(error => console.log(error))

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/auth', authRouts)
app.use('/api/post', postRoutes)
app.use('/api/comment', commetsRoutes)

module.exports = app
