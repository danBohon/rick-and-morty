import React, { Component } from 'react'
import './AddButton.css'

export default class AddButton extends Component {
    constructor(props) {
        super();
    }

    handleDelete() {
        this.props.deleteClick(this.props.person);
    }

    handleAdd() {
        this.props.addClick(this.props.person); 
    }

  render() {
    return (
      <div>
        { this.props.addShow ? <button className="button" onClick={() => this.handleDelete()}>Delete From Favorites</button> : <button className="button" onClick={() => this.handleAdd()}>Add to Favorites</button>}
      </div>
    )
  }
}
