const express   = require('express');
const data     = express.Router()
const db        = require('../models/data')

const sendJSONresp = (req,res)=>res.json(res.rows)

data.route('/')
  .get(db.walchartCall, sendJSONresp)



module.exports = data;



