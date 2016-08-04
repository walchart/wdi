import React              from 'react'
import ReactDOM           from 'react-dom'
import SearchContainer    from './SearchContainer.jsx'
import Header             from './Header.jsx'

export default class App extends React.Component{


    render(){
        return(
          <container>
              <div>
                <Header />
                <h1>dobrydenj swiat</h1>
                <SearchContainer />
              </div>
          </container>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#container'))

