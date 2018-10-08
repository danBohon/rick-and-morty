import React from 'react';

import './Results.css';
import AddButton from './AddButton/AddButton';

export default function Results(props) {

  let addShow = false;
  for(let i = 0; i< props.favorites.length;i++) {
    if(props.favorites[i].id === props.person.id) {
        addShow= true;
        console.log('This person is already in Favorites',props.person.id);
    }
}

  return (
    <div className="characterCard">
        <img src={props.image} alt=""/>
        <div>{props.name}</div>
        <div>{props.species}</div>
        <div>{props.status}</div>
        <AddButton
          addClick={props.addClick}
          deleteClick={props.deleteClick}
          person={props.person}
          favorites={props.favorites}
          addShow={addShow}
        />
    </div>
  )
}
