import React, { Component } from 'react'

export default class AddButton extends Component {
  render() {
      console.log('th.prp',this.props.person.id);
      
    return (
      <div>
        {/* <button onClick={this.props.click}>Add to favorites</button> */}
        <button className="button" onClick={() => this.props.click(this.props.person)}>Add to favorites</button>
      </div>
    )
  }
}
