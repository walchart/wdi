import React              from 'react'
import ReactDOM           from 'react-dom'
import SearchContainer    from './SearchContainer.jsx'
export default class App extends React.Component{


    render(){
        return(
          <container>
              <div>
              <h1>dobrydenj swiat</h1>
              <SearchContainer />
              </div>
          </container>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#container'))
