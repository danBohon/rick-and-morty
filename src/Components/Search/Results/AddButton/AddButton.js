import React, { Component } from 'react'

export default class AddButton extends Component {
    constructor(props) {
        super();
    }
    handleDelete() {
        this.props.deleteClick(this.props.person);
        // this.showButton();
        // this.setState( { show: true })
    }
    handleAdd() {
        this.props.addClick(this.props.person); 
        // this.showButton();
        // this.setState( {show: !true })
    }
  render() {
    return (
      <div>
        { this.props.addShow ? <button className="button" onClick={() => this.handleDelete()}>Delete From Favorites</button> : <button className="button" onClick={() => this.handleAdd()}>Add to Favorites</button>}
      </div>
    )
  }
}
