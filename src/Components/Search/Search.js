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
            // favorites: []

        }
        this.getAllData = this.getAllData.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.displayFavorites = this.displayFavorites.bind(this)
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    handleClick(person) {
        axios.post('/data', {person: person})
        .then(res => {
            let favArr = [];
            for (let i = 0; i < res.data.length; i++) {
                favArr.push(res.data[i]);
                console.log('faveArr', favArr)
            }
        });
    }

    displayFavorites() {
        axios.get('/data').then(res => {
            this.setState({ character: res.data })
        })
    }

    componentDidMount() {
        this.getAllData();
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
            console.table(res.data)
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
                        click={this.handleClick}
                        id={n.id}
                        person={n}
                        />
                    </div>
                )
            })
        
    return (
        <div className="Component">
                <h1>SHOW ME WHAT YOU GOT</h1>
                <input 
                    onChange={ (e) => this.handleChange(e.target.value) }
                    placeholder="Rick Sanchez">
                </input>
                <button onClick={() => this.getCharacter()}>Search</button>
                <button onClick={() => this.getRandomCharacter()}>Random Character</button>
                <button onClick={() => this.displayFavorites()}>Favorites</button>
                <div>
                    <div className="results">{result}</div>
                </div>
        </div>
    )
  }
}
