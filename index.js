'use strict'

import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'
import cors from 'cors'
let app = express()
app.use(bodyParser.json())
app.use(cors())

// respond with "hello world" when a GET request is made to the homepage
app.get('/items', function (req, res) {
  let data = fs.readFileSync('data.json','utf8')
  res.send(data)
})

app.post('/items', function (req, res) {
  let data = req.body
  let content = fs.readFileSync('data.json','utf8')
  let json = JSON.parse(content)
  json.push(data)
  fs.writeFileSync('data.json', JSON.stringify(json),'utf8')
  res.json(data)
})

app.listen(3100)