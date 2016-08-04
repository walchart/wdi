import React     from 'react'

export default class Search extends React.Component {
  render(){
    return (
      <div className="text_field">

        <form onSubmit={this.props.onSubmitSearch}>
          <div >
            <input
            onChange={this.props.onUpdateSearch}
            type='text' />
            <input
            onChange={this.props.onUpdateSearch}
            type='text' />
            <input
            onChange={this.props.onUpdateSearch}
            type='text' />
            <input
            onChange={this.props.onUpdateSearch}
            type='text' />
          <button type='submit'>
              Search
            </button>
          </div>
        </form>
      </div>

      )
    }

  }

