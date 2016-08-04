import React              from 'react'
import ReactDOM           from 'react-dom'

export default class App extends React.Component{


    render(){
        return(
          <container>
              <div>
              <h1>dobrydenj swiat</h1>
              </div>
          </container>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#container'))

