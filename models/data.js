'use strict'


module.exports = {

walchartCall(req,res,next) {
request({
    url:''
    method:'get',
    headers: {
      "X-Mashape-Key": apikey
    },
    json:true
  }
  ,(err,result,body)=>{
    if (err) throw err;
    res.rows = result.body.results
    console.log("the cuisine results: ", res.rows)
    next()
  })
}
}
  walchartCall(a,b,c,d) {
    let data = {a,b,c,d}
    return fetch('/data', {data})
    .then(res => res.json() )
    .then(console.log('walchart call worked'))
  },

}


