import React     from 'react'

// import ajax      from '../helpers/ajaxAdapter.js'
import chart     from './chart.js'

// var MyChart = React.createClass({
  // render: function(){
    // return <LineChart data=chart.data width="600" height="250">
  // }
// })
export default class Results extends React.Component {
  render(){
    return (

       <Line id="walmart" data={chart.data} width="600" height="250"/>


      )

  }

}

