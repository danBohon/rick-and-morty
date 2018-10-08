import React, { Component } from 'react'

export default class AddButton extends Component {
    constructor(props) {
        super();
            this.state = { show: true }
        this.showButton = this.showButton.bind(this)
    }
    showButton() {
        for(let i = 0; i< this.props.favorites.length;i++) {
            if(this.props.favorites[i].id === this.props.person.id) {
                this.setState( {show: !true} )
                console.log('This person is already in Favorites',this.props.person.id);
            } else this.setState( {show: true} )
        }
    }
    componentDidMount() {
        this.showButton();
    }
    handleDelete() {
        this.props.deleteClick(this.props.person);
        this.showButton();
        this.setState( { show: true })
    }
    handleAdd() {
        this.props.addClick(this.props.person); 
        this.showButton();
        this.setState( {show: !true })
    }
  render() {
    return (
      <div>
        { !this.state.show ? <button className="button" onClick={() => this.handleDelete()}>Delete From Favorites</button> : <button className="button" onClick={() => this.handleAdd()}>Add to Favorites</button>}
      </div>
    )
  }
}
