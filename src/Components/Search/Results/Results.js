import React from 'react';

import './Results.css';
import AddButton from './AddButton/AddButton';

export default function Results(props) {

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
        />
    </div>
  )
}
