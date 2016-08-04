import React     from 'react'
require         ('../images/walchart.png')


export default class Header extends React.Component {
  render(){
    return (
      <div className="header">
        <img className="logo" src="../images/walchart.png"/>
      </div>
    )
  }
}
