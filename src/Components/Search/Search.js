import React, { Component } from 'react'

import axios from "axios";

import "./Search.css";

import Results from "./Results/Results";

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            character: [],
            userInput: "",
            allPages: [],
            favorites: [],

        }
        // this.toggleButton = this.toggleButton.bind(this) 
        this.getAllData = this.getAllData.bind(this)
        this.addFav = this.addFav.bind(this)
        this.displayFavorites = this.displayFavorites.bind(this)
        this.deleteFav = this.deleteFav.bind(this)
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    addFav(person) {
        axios.post('/data', {person: person})
        .then(res => {
            // let favArr = [];
            // for (let i = 0; i < res.data.length; i++) {
            //     favArr.push(res.data[i]);
            // }
            this.setState( { favorites: res.data } )
            // console.log(this.state.favorites);
            
        });
    }

    displayFavorites() {
        axios.get('/data').then(res => {
            this.setState({ character: res.data })
        })
    }

    deleteFav (id) {
        axios.delete(`/data/${id.id}`)
        .then(res => { 
            this.setState({ 
                character: res.data,
                favorites: res.data
            })
            // console.log(this.state.favorites);
        })
    }

    componentDidMount() {
        this.getAllData();
        axios.get('/data').then(res => {
            this.setState({ favorites: res.data })
        })

    }

   
    getAllData() {
    let allData = []
        for (let i=1;i<=25;i++) {
            axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`)
            .then(res => {
                for (let j=0;j<res.data.results.length; j++) {
                    allData.push(res.data.results[j]);
                }
            })
        }
        console.log("all data",allData)
        this.setState({ allPages: allData })
    }

   

    getCharacter() {
        axios.get("https://rickandmortyapi.com/api/character/").then(res => {
            this.setState({
                character: res.data.results
            })
            this.setState( {character: this.state.allPages.filter(person => person.name.toLowerCase().includes(this.state.userInput.toLowerCase()) )});
        })
    }
    

    getRandomCharacter() {
        let id = Math.floor(Math.random() * (493 - 1) + 1)
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(res => {
            this.setState({
                character: [res.data]
              })
        })
    }


    render() {
        const { character } = this.state
        
        const result = character.map(n => {
                return (
                    <div key={n.id}>        
                        <Results 
                        image={n.image}
                        name={n.name}
                        species={n.species}
                        status={n.status}
                        addClick={this.addFav}
                        deleteClick={this.deleteFav}
                        id={n.id}
                        person={n}
                        favorites={this.state.favorites}
                        />
                    </div>
                )
            })
        
    return (
        <div className="component">
            <header>
                <h1>SHOW ME WHAT YOU GOT</h1>
                <div className ="search-bar">
                    <input 
                        onChange={ (e) => this.handleChange(e.target.value) }
                        placeholder="Rick Sanchez">
                    </input>
                    <button onClick={() => this.getCharacter()}>Search</button>
                    <button onClick={() => this.getRandomCharacter()}>Random Character</button>
                    <button onClick={() => this.displayFavorites()}>Favorites</button>
                </div>
            </header>
            <div>
                <div className="results">{result}</div>
            </div>
        </div>
    )
  }
}
