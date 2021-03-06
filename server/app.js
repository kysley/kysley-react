const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()


app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))

app.use(express.static(path.resolve(__dirname, '..', 'dist')))
app.use(express.static(path.resolve(__dirname)))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})

module.exports = app
