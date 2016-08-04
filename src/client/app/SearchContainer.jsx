
import React            from 'react'
import Search           from './Search.jsx'
import Results          from './Results.jsx'
// import ajax             from '../helpers/ajaxAdapter.js'
// import util             from '../helpers/util.js'

export default class SearchContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      sales:[]
    }
  }

  //  componentDidMount(){
  //   ajax.walmartCall().then(sales=>{
  //     // when the data comes back, update the state
  //     this.setState({ sales: sales })
  //   })
  // }


  // handleUpdateSearch(e){
  //   // console.log(event.target.value)
  //   this.setState({
  //     query: e.target.value
  //   })
  // }

  handleSubmitSearch(e){
  e.preventDefault();
  ajax.cuisineCall(this.state.query).then( sales =>{
      this.setState({
        sales: []
      })
    })
  }


  render(){
      return (

          <div>
            <Search />
            <Results />
          </div>
      )
  }
}




