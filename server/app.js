const express = require('express')
const morgan = require('morgan')
const path = require('path')
const subdomain = require('subdomain')

const app = express()

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))

app.use(subdomain({ base: 'localhost', removeWWW: true }))

app.use(express.static(path.resolve(__dirname, '..', 'dist')))

app.get('/subdomain/:id/', (req, res) => {
  res.sendFile(path.resolve(__dirname, req.params.id, 'index.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})

module.exports = app