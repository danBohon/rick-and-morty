import React, { Component } from 'react'

export default class AddButton extends Component {
  render() {
    return (
      <div>
        <button className="button" onClick={() => this.props.click(this.props.person)}>Add to favorites</button>
      </div>
    )
  }
}
