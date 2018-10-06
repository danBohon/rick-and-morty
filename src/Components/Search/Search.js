import React, { Component } from 'react'
import axios from "axios";

import Results from "./Results/Results";

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
                character: []
            // name: [],
            // species: [],
            // status: [],
            // image: [],
            // id: []
        }
    }

    getCharacter() {
        axios.get("https://rickandmortyapi.com/api/character/?page=19").then(res => {
            // console.log(res.data)
            this.setState({
                character: res.data.results
                // name: res.data.results,
                // species: res.data.species,
                // status: res.data.status,
                // image: res.data.image,
                // id: res.data.id
              })
        })
    }

    getAnotherCharacter() {
        let id = Math.floor(Math.random() * (493 - 1) + 1)
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(res => {
            console.table(res.data)
            this.setState({
                character:[res.data]
              })
        })
       
        
    }

  render() {
    // const { image, name, species, status, id } = this.state;
    const {character } =this.state
    console.log(character);
    
    const result = character.map(n => {
            return (
                <div>        
                    <Results 
                    image={n.image}
                    name={n.name}
                    species={n.species}
                    status={n.status}
                    id={n.id}
            />
            </div>
            )
        })
        
    return (
        <div className="Component">
                <h1>FIND SOMEONE</h1>
                <button onClick={() => this.getCharacter()}>Get Character</button>
                <button onClick={() => this.getAnotherCharacter()}>Get Random Character</button>
                <div>{result}</div>
                {/* <Results 
                        image={character.image}
                        name={character.name}
                        species={character.species}
                        status={character.status}
                        id={character.id}
                /> */}

        </div>
    )
  }
}
