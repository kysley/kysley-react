const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()


app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))

app.use(express.static(path.resolve(__dirname, '..', 'dist')))
app.use(express.static(path.resolve(__dirname)))

// /tempest
app.get('/tempest/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'tempest', 'tempest.html'))
})

// /opus
app.get('/opus/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'opus', 'opus.html'))
})

// /rgbhex
app.get('/rgbhex/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'rgbhex', 'rgbhex.html'))
})

// /keepsake
app.get('/keepsake/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'keepsake', 'keepsake.html'))
})

// /clock
app.get('/clock/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'clock', 'clock.html'))
})

// /offshoreclothing
app.get('/offshoreclothing/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'offshoreclothing', 'offshoreclothing.html'))
})

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})

module.exports = app
