import React     from 'react'
// import ajax      from '../helpers/ajaxAdapter.js'
let LineChart    = require("react-chartjs").Line;

export default class Results extends React.Component {
  render(){
    return (
      <div>
       <LineChart width="600" height="250"/>
            </div>

      )

  }

}

