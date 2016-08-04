
import React            from 'react'
import Search           from './Search.jsx'
import Results          from './Results.jsx'
// import ajax             from '../helpers/ajaxAdapter.js'
// import util             from '../helpers/util.js'

export default class SearchContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      one:"",
      two:"",
      three:"",
      four:"",
      sales:[]
    }
  }

  //  componentDidMount(){
  //   ajax.walmartCall().then(sales=>{
  //     // when the data comes back, update the state
  //     this.setState({ sales: sales })
  //   })
  // }


  handleOneUpdateSearch(e){
    // console.log(event.target.value)
    this.setState({
      one: e.target.value
    })
  }
  handleTwoUpdateSearch(e){
    // console.log(event.target.value)
    this.setState({
      two: e.target.value
    })
  }

  handleThreeUpdateSearch(e){
    // console.log(event.target.value)
    this.setState({
      three: e.target.value
    })
  }

  handleFourUpdateSearch(e){
    // console.log(event.target.value)
    this.setState({
      four: e.target.value
    })
  }

  handleSubmitSearch(e){
  e.preventDefault();
  ajax.walmartCall(this.state.one, this.state.two, this.state.three, this.state.four).then( sales =>{
      this.setState({
        sales: []
      })
    })
  }


  render(){
      return (

          <div>
            <Search
            onOneUpdateSearch={this.handleOneUpdateSearch.bind(this)}
            onTwoUpdateSearch={this.handleTwoUpdateSearch.bind(this)}
            onThreeUpdateSearch={this.handleThreeUpdateSearch.bind(this)}
            onFourUpdateSearch={this.handleFourUpdateSearch.bind(this)}
            onSubmitSearch={this.handleSubmitSearch.bind(this)}
            sales={this.state.sales} />
          </div>
      )
  }
}




