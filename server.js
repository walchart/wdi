'use strict'

const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = require('dotenv').config()

const express     = require('express')
const morgan      = require('morgan')
const path        = require('path')
const bodyParser  = require('body-parser')
const app         = express()
const port        = process.argv[2] || process.env.PORT || 3000

app.set('superSecret', 'my super secret word')

app.use(morgan( DEV ? 'dev' : 'common'))
// app.use(morgan('dev'))

app.use(express.static(path.join(__dirname,'dist')))

app.use(bodyParser.json());


// app.use('/', recipeRoute)

//app.use('/spoon', spoon)

//Dummy SQL database for API replacement during testing
// app.use('/testapi', testRoute)


app.listen(port, ()=>{
  console.log('Server maxin\' and relaxin\' at ', port)
})
