import React from 'react';

import './Results.css';

export default function Results(props) {

  return (
    <div className="characterCard">
        <img src={props.image} alt=""/>
        <div>{props.name}</div>
        <div>{props.species}</div>
        <div>{props.status}</div>
        <div>{props.id}</div>
    </div>
  )
}
