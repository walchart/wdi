import React     from 'react'
<<<<<<< HEAD
// import ajax      from '../helpers/ajaxAdapter.js'
=======
import ajax      from '../helpers/ajaxAdapter.js'
import chart     from './chart.js'
>>>>>>> e9f06eda64c64b623bb374d05380e03d62fa69ce
let LineChart    = require("react-chartjs").Line;

// var MyChart = React.createClass({
  // render: function(){
    // return <LineChart data=chart.data width="600" height="250">
  // }
// })
export default class Results extends React.Component {
  render(){
    return (
      <div>
       <LineChart id="walmart" data={chart.chart} width="600" height="250"/>
            </div>

      )

  }

}

