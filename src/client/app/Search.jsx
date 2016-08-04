import React     from 'react'

export default class Search extends React.Component {
  render(){
    return (
      <div className="text_field">

        <form onSubmit={this.props.onSubmitSearch}>
          <div >
            <input
            onChange={this.props.onOneUpdateSearch}
            type='text' />
            <input
            onChange={this.props.onTwoUpdateSearch}
            type='text' />
            <input
            onChange={this.props.onThreeUpdateSearch}
            type='text' />
            <input
            onChange={this.props.onFourUpdateSearch}
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

